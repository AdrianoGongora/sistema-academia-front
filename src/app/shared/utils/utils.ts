import { COLORS_BADGE } from "./colors";

export function getIcon(
    iconName: string,
    tooltip: string,
    permission: boolean,
    action?: string
  ) {
    let generalCss = 'flex justify-center items-center p-1.5 w-fit rounded-full ';
  
    let iconObj: any = {
      tooltip: null,
      css: null,
      action: null,
    };
  
    if (permission) {
      iconObj = {
        tooltip,
        css: generalCss + COLORS_BADGE.main,
        action: action ? action : null,
      };
  
      if (['edit'].includes(iconName)) {
        iconObj.css = generalCss + COLORS_BADGE.teal;
      }
  
      if (['delete'].includes(iconName)) {
        iconObj.css = generalCss + COLORS_BADGE.red;
      }
    }
  
    return iconObj;
  }