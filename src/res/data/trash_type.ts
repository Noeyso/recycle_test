import { trashCanImg } from "../img/trashCan/img";

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

export const trashType = [
  "일반쓰레기",
  "플라스틱",
  "종이",
  "유리",
  "고철",
  "비닐",
  "음식물쓰레기",
  "의류수거함",
];

export const trashImgType: { open: string; close: string; color: string }[] = [
  { open: TrashOpen, close: TrashClose, color: "#2DBC59" },
  { open: PlasticOpen, close: PlasticClose, color: "#2E56AA" },
  { open: PaperOpen, close: PaperClose, color: "#D1A223" },
  { open: GlassOpen, close: GlassClose, color: "#57ABAF" },
  { open: MetalOpen, close: MetalClose, color: "#A25D39" },
  { open: VinylOpen, close: VinylClose, color: "#F7789C" },
  { open: FoodOpen, close: FoodClose, color: "#D13D36" },
  { open: ClothOpen, close: ClothClose, color: "#713B9D" },
];
