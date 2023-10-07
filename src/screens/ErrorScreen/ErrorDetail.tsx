import React, { ErrorInfo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface ErrorDetailsProps {
  error: Error;
  errorInfo: ErrorInfo;
  onReset(): void;
}

const ErrorDetail = (props: ErrorDetailsProps) => {
  return (
    <View>
      <Text>ErrorDetail</Text>
    </View>
  );
};

export default ErrorDetail;

const styles = StyleSheet.create({});
