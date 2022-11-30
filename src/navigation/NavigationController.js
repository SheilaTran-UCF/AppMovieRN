import React from 'react';
import {CommonActions, StackActions} from '@react-navigation/native';

const navigationRef = React.createRef();

// đi tới màn khác
const navigate = (name, params) => {
  navigationRef.current.navigate(name, params);
};

// thêm màn mới vào stack, chưa di chuyển (gần như ko dùng)
const push = (name, params) => {
  navigationRef.current?.dispatch(StackActions.push(name, params));
};

// thay thế màn hiện tại = màn khác, dùng khi log in
const replace = (name, params) => {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
};

// quay lại màn trước
const goBack = () => {
  if (navigationRef.current?.canGoBack()) {
    navigationRef.current?.goBack();
  }
};

// đẩy màn dc chỉ định lên đầu tiên (gần như ko dùng)
const popToTop = () => {
  navigationRef.current?.dispatch(StackActions.popToTop());
};

// bỏ mọi màn hình khỏi stack, thêm màn mới vào
const reset = (name, params) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name, params}],
    }),
  );
};

export const NavigationController = {
  navigationRef,
  navigate,
  push,
  replace,
  goBack,
  reset,
  popToTop,
};
