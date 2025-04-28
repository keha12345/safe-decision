import { useRef, useState } from "react"



export default function useSwipe({leftH=()=>{}, rightH=()=>{}, minDistance=50, scroll=false, preventDefault=true}){
    const [cords, setCords] = useState<{s: number|null, e: number|null}>({s: null, e: null});
    const deltaX = useRef(0);

    const onTouchStart = (e:React.TouchEvent) => {
      if(preventDefault) e.preventDefault();
      setCords({s: e.targetTouches[0].clientX, e: null});
    };

    const onTouchMove = (e:React.TouchEvent) => {
      setCords(p => ({...p, e: e.targetTouches[0].clientX}));
    };

    const onTouchEnd = () => {
      if (!cords.s || !cords.e) return;
      const distance = cords.s - cords.e;
      const isLeftSwipe = distance > minDistance;
      const isRightSwipe = distance < -minDistance;
  
      if (isLeftSwipe) leftH();
      if (isRightSwipe) rightH();
    };

    const onWheel = (e: React.WheelEvent) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return; // если скролл больше по вертикали, игнорируем
  
      if(deltaX.current > minDistance+1 || deltaX.current < -minDistance-1) return;
      
      deltaX.current += e.deltaX;
  
      if (deltaX.current > minDistance) {
        leftH();
        setTimeout(()=>{deltaX.current = 0},200);
      }
      if (deltaX.current < -minDistance) {
        rightH();
        setTimeout(()=>{deltaX.current = 0},200);
      }
    };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    ...(scroll?{
      onWheel
    }:{})
  }

}


