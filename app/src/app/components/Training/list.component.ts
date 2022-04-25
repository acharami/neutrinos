/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-list',
  templateUrl: './list.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class listComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_KTKVRpJMOis7YuVq(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_KTKVRpJMOis7YuVq(bh) {
    try {
      bh = this.sd_4iCIgsy5KEAYjW6i(bh);
      //appendnew_next_sd_KTKVRpJMOis7YuVq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KTKVRpJMOis7YuVq');
    }
  }

  navigateToDetailPage(event: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event: event };
      bh.local = {};
      bh = this.sessionStorage(bh);
      //appendnew_next_navigateToDetailPage
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8RLG5r5tsDvdT9wB');
    }
  }

  //appendnew_flow_listComponent_start

  sd_4iCIgsy5KEAYjW6i(bh) {
    try {
      this.page.blogs = undefined;
      bh = this.sd_2q4Bs1V3E5jpiG61(bh);
      //appendnew_next_sd_4iCIgsy5KEAYjW6i
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4iCIgsy5KEAYjW6i');
    }
  }

  sd_2q4Bs1V3E5jpiG61(bh) {
    try {
      const page = this.page;
      page.blogs = [
        {
          id: 1,
          title: 'Blog One',
          description: 'Helloo, I am Blog 1',
          src: 'https://media.istockphoto.com/vectors/abstract-business-arrow-up-logo-icon-vector-design-template-vector-id1140553971?k=20&m=1140553971&s=612x612&w=0&h=7-a1JjWAf8c5qKF46FRgdFg-3jva9qo80hqh0z_Y34A=',
        },
        {
          id: 2,
          title: 'Blog Two',
          description: 'Helloo, I am Blog 2',
          src: 'https://us.123rf.com/450wm/andyadi/andyadi1802/andyadi180200513/95572662-vector-logo-design-for-beauty-salon-dermatology-center-and-wellness-house-.jpg?ver=6',
        },
        {
          id: 3,
          title: 'Blog Three',
          description: 'Helloo, I am Blog 3',
          src: 'https://image.shutterstock.com/image-vector/eye-vision-logo-design-icon-260nw-1656429649.jpg',
        },
      ];
      //appendnew_next_sd_2q4Bs1V3E5jpiG61
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2q4Bs1V3E5jpiG61');
    }
  }

  sessionStorage(bh) {
    try {
      sessionStorage.setItem('selectedBlog', JSON.stringify(bh.input.event));
      bh = this.sd_AiVyvhf98G6v0ygY(bh);
      //appendnew_next_sessionStorage
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Epi05h6pB9UZdNt3');
    }
  }

  async sd_AiVyvhf98G6v0ygY(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/detail/:id');
      await this.__page_injector__
        .get(Router)
        .navigate([
          this.sdService.formatPathWithParams(path, { id: bh.input.event.id }),
        ]);
      //appendnew_next_sd_AiVyvhf98G6v0ygY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AiVyvhf98G6v0ygY');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_listComponent_Catch
}
