import { useMutation } from 'react-query';

import { Appointment } from '../../../../../shared/types';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';
import { useCustomToast } from '../../app/hooks/useCustomToast';
import { useUser } from '../../user/hooks/useUser';

async function setAppointmentUser(
  appointment: Appointment,
  userId: number | undefined,
): Promise<void> {
  if (!userId) return;
  const patchOp = appointment.userId ? 'replace' : 'add';
  const patchData = [{ op: patchOp, path: '/userId', value: userId }];
  await axiosInstance.patch(`/appointment/${appointment.id}`, {
    data: patchData,
  });
}

// TODO: update type for React Query mutate function
type AppointmentMutationFunction = (appointment: Appointment) => void;

export function useReserveAppointment(): AppointmentMutationFunction {
  const { user } = useUser();
  const toast = useCustomToast();

  const { mutate } = useMutation((appointment) =>
    setAppointmentUser(appointment, user?.id),
  );

  return mutate;
}
