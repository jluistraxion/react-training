import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import type { Simpson } from '@/interfaces/simpson.interface'

interface Props {
  character: Simpson
  onClick: () => void
}

export default function CharacterCard({ character, onClick }: Props) {
  return (
    <Card
      key={character._id}
      className="cursor-pointer hover:shadow-xl transition-all"
      onClick={onClick}
    >
      <CardHeader className="p-4">
        <div className="relative w-full h-28 overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-contain"
            src={character.Imagen}
            alt={character.Nombre}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 text-center">
        <CardTitle className="text-lg">{character.Nombre}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {character.Ocupacion}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
