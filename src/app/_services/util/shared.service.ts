/**
 * 组件传值（父子组件间通讯） 带next的 和 asObservable
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
    public isMenuVisable: Subject<boolean> = new BehaviorSubject<boolean>(true); //顶部菜单
    public message: Subject<object> = new BehaviorSubject<object>({ type: '', content: '' }); //消息弹窗
    public titleSubjetc: Subject<any> = new Subject(); //网页title

    public messageTimer: any; //时间取消定时器


    constructor() {

    }

    /**
     * 设置当前是否显示顶部菜单
     * @param time 传入时间参数 
     */
    public putMenuState(state: boolean) {
        this.isMenuVisable.next(state);
    }
    public getMenuState(): Observable<boolean> {
        return this.isMenuVisable.asObservable();
    }

    /**
     * 设置详情页的title
     * @param title 
     */
    public putDetailName(title: string) {
        this.titleSubjetc.next(title);
    }
    public getDetailName(): Observable<string> {
        return this.titleSubjetc.asObservable();
    }

    /**
     * 设置消息弹窗
     * @param option 
     */
    public putMessage(option: object) {
        this.message.next(option);
        clearTimeout(this.messageTimer)
        this.messageTimer = setTimeout(() => {
            this.message.next({ type: '', content: '' });
        }, 3000)

    }
    
    public getMessage(): Observable<object> {
        return this.message.asObservable();
    }


}