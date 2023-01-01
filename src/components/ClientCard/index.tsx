import { Container, Name, NameContainer, Image, PriceContainer, ButtonFinish } from './styles'
import { IServices } from '../../clients'
import { FlatList } from 'react-native'
import { formatCoin } from '../../utils/formatCoin'

interface IClientCardProps {
  name: string
  onDecrement: (Clientid: string) => void
  services: Array<IServices>
  clientId: string
}

export function ClientCard({ services, onDecrement, ...props }: IClientCardProps) {

  return (
    <Container>
      <NameContainer>
        <Name>{props.name}</Name>
        <FlatList
          data={services}
          style={{flexDirection: 'row', marginTop: 12}}
          keyExtractor={services => services.id}
          renderItem={({ item: service }) => (
            <Image source={{ uri: service.icon }} />
          )}
        />
      </NameContainer>

      <PriceContainer>
        <Name variant='price'>{formatCoin(32)}</Name>

        <ButtonFinish onPress={() => onDecrement(props.clientId)}>
          <Name variant='finish'>Finalizar</Name>
        </ButtonFinish>
      </PriceContainer>
    </Container>
  )
}
