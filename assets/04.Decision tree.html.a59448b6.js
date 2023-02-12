import{_ as s,o as a,c as n,d as p}from"./app.c01b2da8.js";const t={},l=p('<h2 id="\u51B3\u7B56\u6811\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u51B3\u7B56\u6811\u7B80\u4ECB" aria-hidden="true">#</a> \u51B3\u7B56\u6811\u7B80\u4ECB</h2><p>\u51B3\u7B56\u6811\uFF08Decision tree\uFF09\u662F\u57FA\u4E8E\u5DF2\u77E5\u5404\u79CD\u60C5\u51B5\uFF08\u7279\u5F81\u53D6\u503C\uFF09\u7684\u57FA\u7840\u4E0A\uFF0C\u901A\u8FC7\u6784\u5EFA\u6811\u578B\u51B3\u7B56\u7ED3\u6784\u6765\u8FDB\u884C\u5206\u6790\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u662F\u5E38\u7528\u7684\u6709\u76D1\u7763\u7684\u5206\u7C7B\u7B97\u6CD5\u3002</p><p>\u51B3\u7B56\u6811\u5B66\u4E60\u901A\u5E38\u5305\u62EC 3 \u4E2A\u6B65\u9AA4\uFF1A\u7279\u5F81\u9009\u62E9\u3001\u51B3\u7B56\u6811\u7684\u751F\u6210\u548C\u51B3\u7B56\u6811\u7684\u4FEE\u526A</p><img src="https://cdn.jsdelivr.net/gh/crush598/image@main/AI/202210181045434.png" alt="\u51B3\u7B56\u6811\u7684\u53D1\u5C55\u53F2" style="zoom:50%;"><h2 id="\u7279\u5F81\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u7279\u5F81\u9009\u62E9" aria-hidden="true">#</a> \u7279\u5F81\u9009\u62E9</h2><p>\u51B3\u7B56\u6811\u7684\u5173\u952E\u5728\u4E8E\uFF1A<strong>\u9009\u53D6\u6700\u4F18\u5212\u5206\u5C5E\u6027</strong>\u3002\u4E00\u822C\u800C\u8A00\uFF0C\u6211\u4EEC\u5E0C\u671B\u968F\u7740\u51B3\u7B56\u6811\u7684\u5212\u5206\u8FC7\u7A0B\uFF0C<strong>\u51B3\u7B56\u6811\u7684\u5206\u652F\u7ED3\u70B9\u6240\u5305\u542B\u7684\u6837\u672C\u5C3D\u53EF\u80FD\u5C5E\u4E8E\u540C\u4E00\u7C7B\u522B\uFF0C\u5373\u7ED3\u70B9\u7684\u7EAF\u5EA6\u8D8A\u6765\u8D8A\u9AD8</strong>\u3002</p><p><u><strong>\u901A\u5E38\u7279\u5F81\u9009\u62E9\u7684\u51C6\u5219\u662F\u4FE1\u606F\u589E\u76CA\u3001\u4FE1\u606F\u589E\u76CA\u7387\u6216\u57FA\u5C3C\u6307\u6570</strong></u></p><details class="custom-container details"><summary>\u7279\u5F81\u9009\u62E9\u6307\u6807</summary><h3 id="_1-\u4FE1\u606F\u71B5" tabindex="-1"><a class="header-anchor" href="#_1-\u4FE1\u606F\u71B5" aria-hidden="true">#</a> \uFF081\uFF09\u4FE1\u606F\u71B5</h3><ul><li>\u4FE1\u606F\u71B5\uFF08information entropy\uFF09\uFF1A\u5EA6\u91CF\u6837\u672C\u7EAF\u5EA6\uFF0C<strong>\u4FE1\u606F\u71B5\u7684\u503C\u8D8A\u5C0F\uFF0CD \u7684\u7EAF\u5EA6\u8D8A\u9AD8</strong>\u3002\u5047\u5B9A\u5F53\u524D\u6837\u672C\u96C6\u5408 D \u4E2D\u7B2C k \u7C7B\u6837\u672C\u7684\u6BD4\u4F8B\u4E3A <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.07153em;">K</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>\uFF0C\u4E00\u5171\u6709 Y \u4E2A\u7C7B\u522B\uFF0C\u5219\u4FE1\u606F\u71B5\u5B9A\u4E49\u4E3A\uFF1A</li><li><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mord mathnormal">n</span><span class="mord mathnormal">t</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.2809em;vertical-align:-0.2997em;"></span><span class="mord">\u2212</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">\u2211</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9812em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.22222em;">Y</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop"><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.207em;"><span style="top:-2.4559em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.2441em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span></li></ul><h3 id="_2-\u4FE1\u606F\u589E\u76CA" tabindex="-1"><a class="header-anchor" href="#_2-\u4FE1\u606F\u589E\u76CA" aria-hidden="true">#</a> \uFF082\uFF09\u4FE1\u606F\u589E\u76CA</h3><ul><li>\u4FE1\u606F\u589E\u76CA\uFF08Information Gain\uFF09\uFF1A\u8861\u91CF\u7684\u662F\u6211\u4EEC<strong>\u9009\u62E9\u67D0\u4E2A\u5C5E\u6027\u8FDB\u884C\u5212\u5206\u65F6\u4FE1\u606F\u71B5\u7684\u53D8\u5316</strong>\uFF08\u53EF\u4EE5\u7406\u89E3\u4E3A\u57FA\u4E8E\u8FD9\u4E2A\u89C4\u5219\u5212\u5206\uFF0C\u4E0D\u786E\u5B9A\u6027\u964D\u4F4E\u7684\u7A0B\u5EA6\uFF09\u3002\u4E00\u822C\u800C\u8A00\uFF0C\u4FE1\u606F\u589E\u76CA\u8D8A\u5927\uFF0C\u8BF4\u660E\u9009\u7528\u8BE5\u5C5E\u6027\u5BF9\u5212\u5206\u7684\u201D\u7EAF\u5EA6\u63D0\u5347\u201C\u8D8A\u5927\uFF0C\u5206\u652F\u6548\u679C\u8D8A\u597D\u3002</li><li><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">G</span><span class="mord mathnormal">ain</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mord mathnormal">n</span><span class="mord mathnormal">t</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2212</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.53em;vertical-align:-0.52em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">\u2211</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9812em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">v</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.22222em;">V</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">\u2223</span><span class="mord mathnormal mtight" style="margin-right:0.02778em;">D</span><span class="mord mtight">\u2223</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">\u2223</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">D</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7385em;"><span style="top:-2.931em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">v</span></span></span></span></span></span></span></span><span class="mord mtight">\u2223</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mord mathnormal">n</span><span class="mord mathnormal">t</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">v</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></li><li><u>\u4FE1\u606F\u589E\u76CA\u51C6\u5219\u5BF9\u53EF\u53D6\u503C\u6570\u76EE\u8F83\u591A\u7684\u5C5E\u6027\u6709\u6240\u504F\u597D(\u5373\u504F\u597D\u5206\u652F\u591A\u7684\u5C5E\u6027)</u></li><li><img src="https://cdn.jsdelivr.net/gh/crush598/image@main/AI/202210181110873.png" alt="iShot_2022-10-18_11.10.05" style="zoom:50%;"></li></ul><h3 id="_3-\u4FE1\u606F\u589E\u76CA\u7387" tabindex="-1"><a class="header-anchor" href="#_3-\u4FE1\u606F\u589E\u76CA\u7387" aria-hidden="true">#</a> \uFF083\uFF09\u4FE1\u606F\u589E\u76CA\u7387</h3><ul><li>\u4FE1\u606F\u589E\u76CA\u7387\uFF08Gain Ratio\uFF09:\u4FE1\u606F\u589E\u76CA\u7387\u76F8\u6BD4\u4FE1\u606F\u589E\u76CA\uFF0C\u591A\u4E86\u4E00\u4E2A\u8861\u91CF\u672C\u8EAB\u5C5E\u6027\u7684\u5206\u6563\u7A0B\u5EA6\u7684\u90E8\u5206\u4F5C\u4E3A\u5206\u6BCD\u3002<u>\u4FE1\u606F\u589E\u76CA\u7387\u5BF9\u53EF\u53D6\u503C\u6570\u76EE\u8F83\u5C11\u7684\u5C5E\u6027\u6709\u6240\u504F\u597D</u></li><li><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">G</span><span class="mord mathnormal">ain</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2212</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mord mathnormal">a</span><span class="mord mathnormal">t</span><span class="mord mathnormal">i</span><span class="mord mathnormal">o</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.53em;vertical-align:-0.52em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.07847em;">I</span><span class="mord mathnormal mtight" style="margin-right:0.22222em;">V</span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">a</span><span class="mclose mtight">)</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">G</span><span class="mord mathnormal mtight">ain</span><span class="mopen mtight">(</span><span class="mord mathnormal mtight" style="margin-right:0.02778em;">D</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight">a</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></li><li><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.07847em;">I</span><span class="mord mathnormal" style="margin-right:0.22222em;">V</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.53em;vertical-align:-0.52em;"></span><span class="mord">\u2212</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">\u2211</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9812em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">v</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.22222em;">V</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">\u2223</span><span class="mord mathnormal mtight" style="margin-right:0.02778em;">D</span><span class="mord mtight">\u2223</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">\u2223</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">D</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7385em;"><span style="top:-2.931em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">v</span></span></span></span></span></span></span></span><span class="mord mtight">\u2223</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop"><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.207em;"><span style="top:-2.4559em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.2441em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">\u2223</span><span class="mord mathnormal mtight" style="margin-right:0.02778em;">D</span><span class="mord mtight">\u2223</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">\u2223</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">D</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7385em;"><span style="top:-2.931em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">v</span></span></span></span></span></span></span></span><span class="mord mtight">\u2223</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></li><li><img src="https://cdn.jsdelivr.net/gh/crush598/image@main/AI/202210181120343.png" alt="iShot_2022-10-18_11.20.00" style="zoom:50%;"></li></ul><h3 id="_4-\u57FA\u5C3C\u6307\u6570" tabindex="-1"><a class="header-anchor" href="#_4-\u57FA\u5C3C\u6307\u6570" aria-hidden="true">#</a> \uFF084\uFF09\u57FA\u5C3C\u6307\u6570</h3><ul><li><strong>\u57FA\u5C3C\u6307\u6570</strong>\uFF08Gini Index\uFF09:\u57FA\u5C3C\u6307\u6570\u8868\u793A\u4ECE\u6570\u636E\u96C6D\u4E2D<strong>\u968F\u673A\u62BD\u53D6\u4E24\u4E2A\u6837\u672C\uFF0C\u5176\u7C7B\u522B\u6807\u8BB0\u4E0D\u4E00\u81F4\u7684\u7684\u6982\u7387</strong>\u3002\u56E0\u6B64\uFF0C\u6982\u7387\u8D8A\u5C0F\uFF0C\u5373<strong>\u57FA\u5C3C\u6307\u6570\u8D8A\u5C0F\uFF0CD \u7EAF\u5EA6\u8D8A\u9AD8</strong>\u3002</li><li><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">G</span><span class="mord mathnormal">ini</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.417em;vertical-align:-0.4358em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">\u2211</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9812em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.22222em;">Y</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">\u2211</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.2477em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.782em;"><span style="top:-2.786em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">\u2018</span></span></span></span></span></span></span></span><span class="mrel mtight"><span class="mrel mtight"><span class="mord vbox mtight"><span class="thinbox mtight"><span class="rlap mtight"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord mtight"><span class="mrel mtight">\uE020</span></span></span><span class="fix"></span></span></span></span></span><span class="mrel mtight">=</span></span><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.4358em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3448em;"><span style="top:-2.4974em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.782em;"><span style="top:-2.786em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight">\u2018</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.2026em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2212</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.2809em;vertical-align:-0.2997em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">\u2211</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9812em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.22222em;">Y</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal">p</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-2.4169em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.2831em;"><span></span></span></span></span></span></span></span></span></span></li><li><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">G</span><span class="mord mathnormal">ini</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\u2212</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">in</span><span class="mord mathnormal">d</span><span class="mord mathnormal">e</span><span class="mord mathnormal">x</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.53em;vertical-align:-0.52em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">\u2211</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9812em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">v</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.22222em;">V</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.2997em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">\u2223</span><span class="mord mathnormal mtight" style="margin-right:0.02778em;">D</span><span class="mord mtight">\u2223</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">\u2223</span><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">D</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7385em;"><span style="top:-2.931em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">v</span></span></span></span></span></span></span></span><span class="mord mtight">\u2223</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.52em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal">G</span><span class="mord mathnormal">ini</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">D</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">v</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span></li><li><img src="https://cdn.jsdelivr.net/gh/crush598/image@main/AI/202210181123311.png" alt="iShot_2022-10-18_11.23.03" style="zoom:50%;"></li></ul></details><h2 id="\u51B3\u7B56\u6811\u7684\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#\u51B3\u7B56\u6811\u7684\u751F\u6210" aria-hidden="true">#</a> \u51B3\u7B56\u6811\u7684\u751F\u6210</h2><p><strong>\u51B3\u7B56\u6811\u7684\u603B\u4F53\u6D41\u7A0B\u662F\u81EA\u6839\u81F3\u53F6\u7684\u9012\u5F52\u8FC7\u7A0B\uFF0C\u5728\u6BCF\u4E2A\u4E2D\u95F4\u7ED3\u70B9\u5BFB\u627E\u4E00\u4E2A\u300C\u5212\u5206\u300D\uFF08split or test\uFF09\u5C5E\u6027</strong>\u3002</p><ul><li>\u7B97\u6CD5\u57FA\u672C\u6D41\u7A0B</li></ul><img src="https://cdn.jsdelivr.net/gh/crush598/image@main/AI/202210181048207.png" alt="iShot_2022-10-18_10.48.16" style="zoom:50%;"><ul><li>\u51B3\u7B56\u6811\u505C\u6B62\u751F\u957F\u7684\u4E09\u4E2A\u6761\u4EF6\uFF1A <ol><li>\u5F53\u524D\u7ED3\u70B9\u5305\u542B\u7684\u6837\u672C\u5168\u5C5E\u4E8E\u540C\u4E00\u7C7B\u522B</li><li>\u6837\u672C\u7684\u5C5E\u6027\u53D6\u503C\u90FD\u76F8\u540C\u6216\u5C5E\u6027\u96C6\u4E3A\u7A7A\uFF0C\u65E0\u6CD5\u5212\u5206</li><li>\u5F53\u524D\u7ED3\u70B9\u5305\u542B\u6837\u672C\u96C6\u5408\u4E3A\u7A7A</li></ol></li></ul><h2 id="\u51B3\u7B56\u6811\u7684\u526A\u679D" tabindex="-1"><a class="header-anchor" href="#\u51B3\u7B56\u6811\u7684\u526A\u679D" aria-hidden="true">#</a> \u51B3\u7B56\u6811\u7684\u526A\u679D</h2><p>\u57FA\u672C\u7B56\u7565\u5305\u542B\u300C<strong>\u9884\u526A\u679D</strong>\u300D\u548C\u300C<strong>\u540E\u526A\u679D</strong>\u300D\u4E24\u4E2A\uFF1A</p><p><strong>\u9884\u526A\u679D</strong>\uFF08<strong>pre-pruning</strong>\uFF09\uFF1A\u5728\u51B3\u7B56\u6811\u751F\u957F\u8FC7\u7A0B\u4E2D\uFF0C\u5BF9\u6BCF\u4E2A\u7ED3\u70B9\u5728\u5212\u5206\u524D\u8FDB\u884C\u4F30\u8BA1\uFF0C\u82E5\u5F53\u524D\u7ED3\u70B9\u7684\u5212\u5206\u4E0D\u80FD\u5E26\u6765\u51B3\u7B56\u6811\u6CDB\u5316\u6027\u80FD\u7684\u63D0\u5347\uFF0C\u5219\u505C\u6B62\u5212\u5206\u5E76\u5C06\u5F53\u524D\u7ED3\u70B9\u6807\u8BB0\u4E3A\u53F6\u7ED3\u70B9\u3002</p><ul><li>\u4F18\u70B9\uFF1A\u4F7F\u5F97\u51B3\u7B56\u6811\u7684\u5F88\u591A\u5206\u652F\u90FD\u6CA1\u6709\u5C55\u5F00\uFF0C<strong>\u4E0D\u4EC5\u964D\u4F4E\u4E86\u8FC7\u62DF\u5408\u7684\u98CE\u9669\uFF0C\u8FD8\u663E\u8457\u51CF\u5C11\u4E86\u51B3\u7B56\u6811\u7684\u8BAD\u7EC3\u65F6\u95F4\u5F00\u9500\u548C\u6D4B\u8BD5\u65F6\u95F4\u5F00\u9500\u3002</strong></li><li>\u7F3A\u70B9\uFF1A\u6709\u4E9B\u5206\u652F\u7684\u5F53\u524D\u5212\u5206\u867D\u7136\u4E0D\u80FD\u63D0\u5347\u6CDB\u5316\u6027\u80FD\uFF0C\u751A\u81F3\u5BFC\u81F4\u6CDB\u5316\u6027\u80FD\u4E0B\u964D\uFF0C\u4F46<strong>\u5728\u5176\u57FA\u7840\u4E0A\u8FDB\u884C\u7684\u540E\u7EED\u5212\u5206\u53EF\u80FD\u5BFC\u81F4\u6027\u80FD\u663E\u8457\u63D0\u5347</strong>\u3002\u9884\u526A\u679D\u57FA\u4E8E<strong>\u8D2A\u5FC3</strong>\u7684\u601D\u60F3\uFF0C\u672C\u8D28\u4E0A\u7981\u6B62\u8FD9\u4E9B\u5206\u652F\u5C55\u5F00\uFF0C\u7ED9\u9884\u526A\u679D\u51B3\u7B56\u6811\u5E26\u6765\u4E86<strong>\u6B20\u62DF\u5408</strong>\u7684\u98CE\u9669</li></ul><p><strong>\u540E\u526A\u679D</strong>\uFF08<strong>post-pruning</strong>\uFF09\uFF1A\u5148\u4ECE\u8BAD\u7EC3\u96C6\u751F\u6210\u4E00\u9897\u5B8C\u6574\u7684\u51B3\u7B56\u6811\uFF0C\u7136\u540E\u81EA\u5E95\u5411\u4E0A\u5730\u5BF9\u975E\u53F6\u7ED3\u70B9\u8FDB\u884C\u8003\u5BDF\uFF0C\u82E5\u5C06\u8BE5\u7ED3\u70B9\u5BF9\u5E94\u7684\u5B50\u6811\u66FF\u6362\u4E3A\u53F6\u7ED3\u70B9\u80FD\u5E26\u6765\u51B3\u7B56\u6811\u6CDB\u5316\u6027\u80FD\u7684\u63D0\u5347\uFF0C\u5219\u5C06\u8BE5\u5B50\u6811\u66FF\u6362\u4E3A\u53F6\u7ED3\u70B9\u3002</p><ul><li>\u4F18\u70B9\uFF1A\u53EF\u4EE5\u770B\u51FA\uFF0C<strong>\u540E\u526A\u679D\u51B3\u7B56\u6811\u6BD4\u9884\u526A\u679D\u51B3\u7B56\u6811\u4FDD\u7559\u4E86\u66F4\u591A\u7684\u5206\u652F</strong>\u3002\u4E00\u822C\u60C5\u51B5\u4E2D\uFF0C\u540E\u526A\u679D\u51B3\u7B56\u6811<strong>\u6B20\u62DF\u5408\u7684\u98CE\u9669\u6BD4\u8F83\u5C0F\uFF0C\u6CDB\u5316\u6027\u80FD\u4E5F\u5F80\u5F80\u4F18\u4E8E\u9884\u526A\u679D\u51B3\u7B56\u6811</strong>\u3002</li><li>\u7F3A\u70B9\uFF1A\u540E\u526A\u679D\u8FC7\u7A0B\u662F\u5B8C\u6574\u751F\u6210\u51B3\u7B56\u6811\u4E4B\u540E\u518D\u8FDB\u884C\u7684\uFF0C\u5E76\u4E14\u8981\u81EA\u5E95\u5411\u4E0A\uFF0C\u5BF9\u6240\u6709\u975E\u53F6\u8282\u70B9\u6CE8\u610F\u89C2\u5BDF\uFF0C<strong>\u8BAD\u7EC3\u65F6\u95F4\u5F00\u9500\u6BD4\u672A\u526A\u679D\u51B3\u7B56\u6811\u548C\u9884\u526A\u679D\u51B3\u7B56\u6811\u90FD\u8981\u5927\u5F97\u591A\u3002</strong></li></ul><h2 id="\u8FDE\u7EED\u4E0E\u7F3A\u5931\u503C" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u7EED\u4E0E\u7F3A\u5931\u503C" aria-hidden="true">#</a> \u8FDE\u7EED\u4E0E\u7F3A\u5931\u503C</h2><p>\u5BF9\u4E8E\u8FDE\u7EED\u5C5E\u6027\uFF1A\u7531\u4E8E\u8FDE\u7EED\u5C5E\u6027\u7684\u53EF\u53D6\u503C\u6570\u76EE\u4E0D\u518D\u662F\u6709\u9650\u7684\uFF0C\u56E0\u6B64\u53EF\u4EE5\u91C7\u7528<strong>\u8FDE\u7EED\u5C5E\u6027\u79BB\u6563\u5316\u6280\u672F</strong>\u3002</p><p>\u5BF9\u4E8E\u7F3A\u5931\u503C\uFF1A\u65B9\u6CD5--\u201C<mark>\u6837\u672C\u8D4B\u6743\uFF0C\u6743\u91CD\u5212\u5206</mark>\u201D</p><p>\u53C2\u8003\u8D44\u6599 \uFF1A</p><ul><li>https://juejin.cn/post/7070496988256534558</li><li>https://www.showmeai.tech/article-detail/190</li></ul>',24),e=[l];function m(i,r){return a(),n("div",null,e)}var h=s(t,[["render",m],["__file","04.Decision tree.html.vue"]]);export{h as default};
