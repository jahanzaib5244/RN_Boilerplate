import Toast, {ToastShowParams} from 'react-native-toast-message';

export const RunToast = ({
  title,
  subTitle,
  type = 'error',
  ...options
}: ToastShowParams & {
  title: string;
  subTitle?: string;
  type?: 'error' | 'success';
}) => {
  return Toast.show({
    text1: title,
    text2: subTitle,
    type,
    ...options,
  });
};
