/*
 * 图片的渲染
*/
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'imgHtml' })
export class ImgHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }

    //type不一样裁剪分辨率也不一样 
    transform(style, type) {

        if (style) {
            let url = `http://ironimg.charmculture.com/${style}`

            if (type == 1) {
                url += '?imageView2/1/w/1500/h/300/q/75|imageslim'
            } else if (type == 2) {
                url += '?imageView2/1/w/800/h/400/q/75|imageslim'
            } else if (type == 3) {
                url += '?imageView2/1/w/800/h/500/q/75|imageslim'
            } else if (type == 4) {
                url += '?imageView2/0/w/500/h/500/q/75|imageslim'
            }
            return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`); //识别图片
        }

    }
}