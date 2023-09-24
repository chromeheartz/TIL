import { useCustomToast } from 'components/app/hooks/useCustomToast';
import jsonpatch from 'fast-json-patch';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { queryKeys } from 'react-query/constants';

import type { User } from '../../../../../shared/types';
import { axiosInstance, getJWTHeader } from '../../../axiosInstance';
import { useUser } from './useUser';

// for when we need a server function
async function patchUserOnServer(
  newData: User | null,
  originalData: User | null,
): Promise<User | null> {
  if (!newData || !originalData) return null;
  // create a patch for the difference between newData and originalData
  const patch = jsonpatch.compare(originalData, newData);

  // send patched data to the server
  const { data } = await axiosInstance.patch(
    `/user/${originalData.id}`,
    { patch },
    {
      headers: getJWTHeader(originalData),
    },
  );
  return data.user;
}

// TODO: update type to UseMutateFunction type
export function usePatchUser(): (newData: User | null) => void {
  const { user, updateUser } = useUser();
  const toast = useCustomToast();
  const queryClient = useQueryClient();

  const { mutate: patchUser } = useMutation(
    (newUserData: User) => patchUserOnServer(newUserData, user),
    {
      // 컨텍스트 반환
      onMutate: async (newData: User | null) => {
        // 사용자 데이터를 대상으로 한 발신 쿼리 모두 취소
        // 오래된 서버데이터는 낙관적 업데이트 데이터를 덮어쓰지 않음
        queryClient.cancelQueries(queryKeys.user);

        // 기존 사용자 값의 스냅샷을 찍기
        const previousUserData: User = queryClient.getQueryData(queryKeys.user);

        // 새로운 값으로 캐시를 낙관적 업데이트
        updateUser(newData);

        // 이후 해당 컨텍스트 반환
        return { previousUserData };
      },
      onError: (error, newData, previousUserDataContext) => {
        // 저장된 값으로 캐시를 롤백
        if (previousUserDataContext.previousUserData) {
          updateUser(previousUserDataContext.previousUserData);
          toast({
            title: 'Update failed, restoring previous values',
            status: 'warning',
          });
        }
      },
      onSuccess: (userData: User | null) => {
        if (user) {
          updateUser(userData);
          toast({
            title: 'User updated!',
            status: 'success',
          });
        }
      },
      onSettled: () => {
        // 사용자에 대한 데이터를 무효화
        queryClient.invalidateQueries(queryKeys.user);
      },
    },
  );

  return patchUser;
}
