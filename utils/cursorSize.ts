
type Props = {
    cursor: HTMLElement;
    text?: string | null ;
    bool ?: boolean;
}



export const onMouseOver = ({cursor , text , bool=true} : Props) => {
    cursor.style.width = "100px";
    cursor.style.height = "100px";
    bool ? cursor.innerHTML = `<h1>${text}</h1>` : "";
    cursor.style.transform = "translate(-50% ,-50%)";
  };

 export const onMouseLeave = ({cursor , bool} : Props) => {
    cursor.style.width = "40px";
    cursor.style.height = "40px";
    cursor.innerHTML = "";
    cursor.style.transform = "translate(0,0)";
  }