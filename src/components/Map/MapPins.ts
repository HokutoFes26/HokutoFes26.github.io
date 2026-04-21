
 // mapId: 0=1F, 1=2F, 2=3F, 3=4F, 4=Gym, 5=Lib, 6=Ng, 7=OutSmall, 8=OutLarge
export const MapPins: Record<string, { mapId: number; x: number; y: number }> = {
  "多目的ホール": { mapId: 0, x: 450, y: 550 },
  "第１体育館": { mapId: 4, x: 500, y: 500 },
  "正面玄関前": { mapId: 8, x: 300, y: 400 },
  "中庭": { mapId: 7, x: 500, y: 500 },
  "模擬店 1": { mapId: 0, x: 200, y: 800 },
  "2F 第1会議室": { mapId: 1, x: 300, y: 400 },
};

export const mapList = [
  { category: "全体", title: "全体図", src: "/img/maps/out_large.png" },
  { category: "全体", title: "模擬店", src: "/img/maps/out_small.png" },
  { category: "校舎", title: "1F", src: "/img/maps/1f.png" },
  { category: "校舎", title: "2F", src: "/img/maps/2f.png" },
  { category: "校舎", title: "3F", src: "/img/maps/3f.png" },
  { category: "校舎", title: "4F", src: "/img/maps/4f.png" },
  { category: "建物", title: "なごうら", src: "/img/maps/ng.png" },
  { category: "建物", title: "としょ", src: "/img/maps/lib.png" },
  { category: "建物", title: "たいく", src: "/img/maps/gym.png" },
];