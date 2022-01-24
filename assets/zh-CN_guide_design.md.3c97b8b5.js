import{_ as a,a as d,b as e,c as t}from"./controllability.513f4d45.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{l as i,k as s,y as r}from"./framework.b3e0f3f4.js";const x='{"title":"\u8BBE\u8BA1","description":"","frontmatter":{"title":"\u8BBE\u8BA1","lang":"zh-CN"},"headers":[{"level":2,"title":"\u4E00\u81F4 Consistency","slug":"\u4E00\u81F4-consistency"},{"level":2,"title":"\u53CD\u9988 Feedback","slug":"\u53CD\u9988-feedback"},{"level":2,"title":"\u6548\u7387 Efficiency","slug":"\u6548\u7387-efficiency"},{"level":2,"title":"\u53EF\u63A7 Controllability","slug":"\u53EF\u63A7-controllability"}],"relativePath":"zh-CN/guide/design.md","lastUpdated":1643040428538}',c={},f=r('<h1 id="\u8BBE\u8BA1\u539F\u5219" tabindex="-1" data-v-a3f5d70e>\u8BBE\u8BA1\u539F\u5219 <a class="header-anchor" href="#\u8BBE\u8BA1\u539F\u5219" aria-hidden="true" data-v-a3f5d70e>#</a></h1><div class="guide__design" data-v-a3f5d70e><div class="el-row cards" style="margin-left:-7px;margin-right:-7px;" data-v-a3f5d70e><div class="el-col el-col-24 el-col-xs-12 el-col-sm-6 is-guttered" data-v-a3f5d70e><div class="card" data-v-a3f5d70e><img src="'+a+'" alt="\u4E00\u81F4" data-v-a3f5d70e><p data-v-a3f5d70e>\u4E00\u81F4</p></div></div><div class="el-col el-col-24 el-col-xs-12 el-col-sm-6 is-guttered" data-v-a3f5d70e><div class="card" data-v-a3f5d70e><img src="'+d+'" alt="\u53CD\u9988" data-v-a3f5d70e><p data-v-a3f5d70e>\u53CD\u9988</p></div></div><div class="el-col el-col-24 el-col-xs-12 el-col-sm-6 is-guttered" data-v-a3f5d70e><div class="card" data-v-a3f5d70e><img src="'+e+'" alt="\u6548\u7387" data-v-a3f5d70e><p data-v-a3f5d70e>\u6548\u7387</p></div></div><div class="el-col el-col-24 el-col-xs-12 el-col-sm-6 is-guttered" data-v-a3f5d70e><div class="card" data-v-a3f5d70e><img src="'+t+'" alt="\u53EF\u63A7" data-v-a3f5d70e><p data-v-a3f5d70e>\u53EF\u63A7</p></div></div></div></div><h2 id="\u4E00\u81F4-consistency" tabindex="-1" data-v-a3f5d70e>\u4E00\u81F4 Consistency <a class="header-anchor" href="#\u4E00\u81F4-consistency" aria-hidden="true" data-v-a3f5d70e>#</a></h2><ul data-v-a3f5d70e><li data-v-a3f5d70e><p data-v-a3f5d70e><strong data-v-a3f5d70e>\u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A</strong> \u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B</p></li><li data-v-a3f5d70e><p data-v-a3f5d70e><strong data-v-a3f5d70e>\u5728\u754C\u9762\u4E2D\u4E00\u81F4\uFF1A</strong> \u6240\u6709\u7684\u5143\u7D20\u548C\u7ED3\u6784\u9700\u4FDD\u6301\u4E00\u81F4\uFF0C\u6BD4\u5982\uFF1A\u8BBE\u8BA1\u6837\u5F0F\u3001\u56FE\u6807\u548C\u6587\u672C\u3001\u5143\u7D20\u7684\u4F4D\u7F6E\u7B49\u3002</p></li></ul><h2 id="\u53CD\u9988-feedback" tabindex="-1" data-v-a3f5d70e>\u53CD\u9988 Feedback <a class="header-anchor" href="#\u53CD\u9988-feedback" aria-hidden="true" data-v-a3f5d70e>#</a></h2><ul data-v-a3f5d70e><li data-v-a3f5d70e><p data-v-a3f5d70e><strong data-v-a3f5d70e>\u63A7\u5236\u53CD\u9988\uFF1A</strong> \u901A\u8FC7\u754C\u9762\u6837\u5F0F\u548C\u4EA4\u4E92\u52A8\u6548\u8BA9\u7528\u6237\u53EF\u4EE5\u6E05\u6670\u7684\u611F\u77E5\u81EA\u5DF1\u7684\u64CD\u4F5C\uFF1B</p></li><li data-v-a3f5d70e><p data-v-a3f5d70e><strong data-v-a3f5d70e>\u9875\u9762\u53CD\u9988\uFF1A</strong> \u64CD\u4F5C\u540E\uFF0C\u901A\u8FC7\u9875\u9762\u5143\u7D20\u7684\u53D8\u5316\u6E05\u6670\u5730\u5C55\u73B0\u5F53\u524D\u72B6\u6001\u3002</p></li></ul><h2 id="\u6548\u7387-efficiency" tabindex="-1" data-v-a3f5d70e>\u6548\u7387 Efficiency <a class="header-anchor" href="#\u6548\u7387-efficiency" aria-hidden="true" data-v-a3f5d70e>#</a></h2><ul data-v-a3f5d70e><li data-v-a3f5d70e><p data-v-a3f5d70e><strong data-v-a3f5d70e>\u7B80\u5316\u6D41\u7A0B\uFF1A</strong> \u8BBE\u8BA1\u7B80\u6D01\u76F4\u89C2\u7684\u64CD\u4F5C\u6D41\u7A0B\uFF1B</p></li><li data-v-a3f5d70e><p data-v-a3f5d70e><strong data-v-a3f5d70e>\u6E05\u6670\u660E\u786E\uFF1A</strong> \u8BED\u8A00\u8868\u8FBE\u6E05\u6670\u4E14\u8868\u610F\u660E\u786E\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u7406\u89E3\u8FDB\u800C\u4F5C\u51FA\u51B3\u7B56\uFF1B</p></li><li data-v-a3f5d70e><p data-v-a3f5d70e><strong data-v-a3f5d70e>\u5E2E\u52A9\u7528\u6237\u8BC6\u522B\uFF1A</strong> \u754C\u9762\u7B80\u5355\u76F4\u767D\uFF0C\u8BA9\u7528\u6237\u5FEB\u901F\u8BC6\u522B\u800C\u975E\u56DE\u5FC6\uFF0C\u51CF\u5C11\u7528\u6237\u8BB0\u5FC6\u8D1F\u62C5\u3002</p></li></ul><h2 id="\u53EF\u63A7-controllability" tabindex="-1" data-v-a3f5d70e>\u53EF\u63A7 Controllability <a class="header-anchor" href="#\u53EF\u63A7-controllability" aria-hidden="true" data-v-a3f5d70e>#</a></h2><ul data-v-a3f5d70e><li data-v-a3f5d70e><p data-v-a3f5d70e><strong data-v-a3f5d70e>\u7528\u6237\u51B3\u7B56\uFF1A</strong> \u6839\u636E\u573A\u666F\u53EF\u7ED9\u4E88\u7528\u6237\u64CD\u4F5C\u5EFA\u8BAE\u6216\u5B89\u5168\u63D0\u793A\uFF0C\u4F46\u4E0D\u80FD\u4EE3\u66FF\u7528\u6237\u8FDB\u884C\u51B3\u7B56\uFF1B</p></li><li data-v-a3f5d70e><p data-v-a3f5d70e><strong data-v-a3f5d70e>\u7ED3\u679C\u53EF\u63A7\uFF1A</strong> \u7528\u6237\u53EF\u4EE5\u81EA\u7531\u7684\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5305\u62EC\u64A4\u9500\u3001\u56DE\u9000\u548C\u7EC8\u6B62\u5F53\u524D\u64CD\u4F5C\u7B49\u3002</p></li></ul>',10),v=[f];function o(n,p,_,g,h,u){return s(),i("div",null,v)}var k=l(c,[["render",o],["__scopeId","data-v-a3f5d70e"]]);export{x as __pageData,k as default};
