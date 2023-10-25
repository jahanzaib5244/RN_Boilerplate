import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import {AlertHandler, AlertOptions} from './interface';
import {COLORS} from '../../constants';

const AppAlert = forwardRef<AlertHandler, {}>(({}, ref) => {
  const [showAlert, setshowAlert] = useState(false);
  const [options, setoptions] = useState<AlertOptions | undefined>(undefined);

  const hide = useCallback(() => {
    return setshowAlert(false);
  }, []);

  const show = useCallback(
    ({...props}: AlertOptions) => {
      setoptions(props);
      setshowAlert(true);
    },
    [options],
  );

  useImperativeHandle(ref, () => ({hide, show}), [hide, show]);

  return (
    <AwesomeAlert
      {...options}
      show={showAlert}
      showProgress={false}
      title={options?.title ?? ''}
      message={options?.message ?? ''}
      closeOnTouchOutside={options?.closeOnTouchOutside ?? true}
      closeOnHardwareBackPress={options?.closeOnHardwareBackPress ?? true}
      showCancelButton={options?.showCancelButton ?? true}
      showConfirmButton={options?.showConfirmButton ?? true}
      cancelText={options?.cancelText ?? 'Cancel'}
      confirmText={options?.confirmText ?? 'Ok'}
      confirmButtonColor={options?.confirmButtonColor ?? COLORS.primary}
      onCancelPressed={() => {
        hide();
        !!options?.onConfirmPress && options?.onConfirmPress();
      }}
      onConfirmPressed={() => {
        hide();
        !!options?.onCancelPress && options?.onCancelPress();
      }}
    />
  );
});

export default AppAlert;
