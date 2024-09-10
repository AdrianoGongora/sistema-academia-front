import { Injectable } from '@angular/core';

import icEdit from '@iconify/icons-ic/round-edit';
import icDelete from '@iconify/icons-ic/round-delete';

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  getIcon(icon: any) {
    if (icon == 'icEdit') {
      return icEdit;
    }
    if (icon == 'icDelete') {
      return icDelete;
    }

    return icEdit;
  }
}