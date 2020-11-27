import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { COLORS } from './Colors';
export const { width, height } = Dimensions.get('window');

export const AuthStyle = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: COLORS.PRIMARY,
        flex: 1,
        justifyContent: "center"
    },
    Right: {
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    Row: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    }
});