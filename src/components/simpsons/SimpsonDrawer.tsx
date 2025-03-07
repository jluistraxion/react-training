import { Drawer, DrawerContent, DrawerTitle } from '@/components/ui/drawer'
import type { Simpson } from '@/interfaces/simpson.interface'

interface Props {
  character: Simpson | null
  isOpen: boolean
  onClose: () => void
}

export default function SimpsonDrawer({ character, isOpen, onClose }: Props) {
  return (
    <Drawer
      open={isOpen}
      onOpenChange={onClose}
    >
      <DrawerContent className="h-1/3 p-4">
        <DrawerTitle className="text-foreground font-semibold text-2xl">
          {character?.Nombre}
        </DrawerTitle>
        <p className="my-2">{character?.Historia}</p>
        <div className="flex flex-col text-muted-foreground text-sm">
          <span>Ocupación: {character?.Ocupacion}</span>
          <span>Género: {character?.Genero}</span>
          <span>Estado: {character?.Estado}</span>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
