import { VStack, Icon, useToast, FlatList } from "native-base";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Octicons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { api } from "../services/api";
import { useCallback, useState } from "react";
import { Loading } from "../components/Loading";
import { PoolCard, PoolCardProps } from "../components/PoolCard";
import { EmptyPoolList } from "../components/EmptyPoolList";

export function Pools(){
    const { navigate } = useNavigation();
    const toast = useToast();
    
    const [isLoading, setIsLoading] = useState(true);
    const [pools, setPools] = useState<PoolCardProps[]>([])

    async function fetchPool(){
        try {
            setIsLoading(true)
            const response = await api.get('/pools');
            setPools(response.data.pools)
        } catch (error) {
            console.log(error)
            toast.show({
                title: 'Não foi possivel carregar os bolões',
                placement: 'top',
                bgColor: 'red.500'
            })
        }finally{
            setIsLoading(false)
        }
    }

    useFocusEffect(useCallback(() => {
        fetchPool()
    },[]));

    return(
        <VStack flex={1} bgColor='gray.900'>
            <Header title="Meus bolões" />
            <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor='gray.600' pb={4} mb={4}>
                <Button onPress={() => navigate('find')} leftIcon={<Icon as={Octicons} name="search" color="black" size="md"/>} title="Buscar bolão por código" />
            </VStack> 

            {
                isLoading ? <Loading /> : 
                <FlatList 
                    data={pools}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <PoolCard data={item} />}
                    px={5}
                    showsHorizontalScrollIndicator={false}
                    _contentContainerStyle={{pb: 10}}
                    ListEmptyComponent={()=> <EmptyPoolList />}
                />
            }
        </VStack>
    )
}