import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'imagen' /*,
  pure:false*/,
})
export class ImagenPipe implements PipeTransform {
  transform(heroe: Heroe): string {
    let img: string = '';
    if (!heroe.id && !heroe.alt_img) {
      img = 'assets/no-image.png';
    } else if (heroe.alt_img) {
      img = heroe.alt_img;
    } else {
      img = `assets/heroes/${heroe.id}.jpg`;
    }

    return img;
  }
}
