import { Text } from "react-native"
import { TRouteProps } from "../Routes"
import { useRoute } from "@react-navigation/native"

export const DetailPage = () => {
    const { params } = useRoute<TRouteProps<'detail'>>()

    return <>
        <Text>Detail {params.rate}</Text>
    </>
}