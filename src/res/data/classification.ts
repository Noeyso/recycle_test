import { trashCanImg } from "./../img/img";

const {
  TrashOpen,
  TrashClose,
  PlasticOpen,
  PlasticClose,
  PaperOpen,
  PaperClose,
  GlassOpen,
  GlassClose,
  MetalOpen,
  MetalClose,
  VinylOpen,
  VinylClose,
  FoodOpen,
  FoodClose,
  ClothOpen,
  ClothClose,
} = trashCanImg;

export const type = [
  "일반쓰레기",
  "플라스틱",
  "종이",
  "유리",
  "고철",
  "비닐",
  "음식물쓰레기",
  "의류수거함",
];

export const imgType: { open: string; close: string }[] = [
  { open: TrashOpen, close: TrashClose },
  { open: PlasticOpen, close: PlasticClose },
  { open: PaperOpen, close: PaperClose },
  { open: GlassOpen, close: GlassClose },
  { open: MetalOpen, close: MetalClose },
  { open: VinylOpen, close: VinylClose },
  { open: FoodOpen, close: FoodClose },
  { open: ClothOpen, close: ClothClose },
];
