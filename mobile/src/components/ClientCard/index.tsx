//REACT
import { FlatList } from 'react-native'
//STYLED COMPONENTS
import {
  Container,
  Name,
  NameContainer,
  Image,
  PriceContainer,
  ButtonFinish,
  EmptyFlatList
} from './styles'
//TYPES
import { IClient, IServices } from '../../@types/Clients'
//UTILS
import { formatCoin } from '../../utils/formatCoin'

interface IClientCardProps {
  client: IClient
  onDecrement: (client: IClient) => void
  services: Array<IServices>
}

export function ClientCard({ services, onDecrement, client }: IClientCardProps) {
  const finalValue = () => {
    const name = services.map(services => services.name)

    if(name.includes('Cabelo') && name.includes('Barba') && !name.includes('Sobrancelha')) {
      return 40
    }
    return services.reduce((acc, ccr) => acc + ccr.price, 0)
  }

  return (
    <Container>
      <NameContainer>
        <Name>{client.name}</Name>
        <FlatList
          data={services}
          style={{ flexDirection: 'row', marginTop: 12 }}
          keyExtractor={services => services.id}
          ListEmptyComponent={EmptyFlatList}
          renderItem={({ item: service }) => (
            <Image source={{ uri: service.icon }} />
          )}
        />
      </NameContainer>

      <PriceContainer>
        <Name variant='price'>{formatCoin(finalValue())}</Name>

        <ButtonFinish onPress={() => onDecrement(client)}>
          <Name variant='finish'>Finalizar</Name>
        </ButtonFinish>
      </PriceContainer>
    </Container>
  )
}