import { VStack, Icon } from "native-base";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export function Pools(){
    const { navigate } = useNavigation();

    return(
        <VStack flex={1} bgColor='gray.900'>
            <Header title="Meus bolões" />
            <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor='gray.600' pb={4} mb={4}>
                <Button onPress={() => navigate('find')} leftIcon={<Icon as={Octicons} name="search" color="black" size="md"/>} title="Buscar bolão por código" />
            </VStack> 
        </VStack>
    )
}