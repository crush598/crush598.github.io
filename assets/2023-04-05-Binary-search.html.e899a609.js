import{_ as n,o as s,c as a,d as p}from"./app.63f8fbc0.js";const t={},e=p(`<h1 id="\u4E8C\u5206\u67E5\u627E\u7684\u7EC6\u8282-\u91CD\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u5206\u67E5\u627E\u7684\u7EC6\u8282-\u91CD\u70B9" aria-hidden="true">#</a> \u4E8C\u5206\u67E5\u627E\u7684\u7EC6\u8282\uFF08\u91CD\u70B9\uFF09</h1><p>\u4E8C\u5206\u7684\u672C\u8D28\u662F <strong>\u8FB9\u754C</strong>\uFF0C\u5176\u6838\u5FC3\u5728\u4E8E\u627E\u5230\u67D0\u79CD\u6027\u8D28\u53EF\u4EE5\u5C06\u533A\u95F4\u4E00\u5206\u4E3A\u4E8C\u3002</p><h2 id="\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F" aria-hidden="true">#</a> \u6A21\u677F</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">//</span> \u533A\u95F4 <span class="token punctuation">[</span>l<span class="token punctuation">,</span> r<span class="token punctuation">]</span> \u88AB\u5212\u5206\u6210 <span class="token punctuation">[</span>l<span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> \u548C <span class="token punctuation">[</span>mid<span class="token punctuation">,</span> r<span class="token punctuation">]</span> \u65F6\u4F7F\u7528\uFF1A
bsearch<span class="token punctuation">(</span><span class="token builtin">int</span> l<span class="token punctuation">,</span> <span class="token builtin">int</span> r<span class="token punctuation">)</span><span class="token punctuation">:</span>
    l<span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">:</span>
        mid <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>check<span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
          	l <span class="token operator">=</span> mid
        <span class="token keyword">else</span> <span class="token punctuation">:</span>
          	r <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span>
    
    <span class="token keyword">return</span> l


<span class="token operator">//</span> \u68C0\u67E5 x \u662F\u5426\u6EE1\u8DB3\u67D0\u79CD\u6027\u8D28
<span class="token builtin">bool</span> check<span class="token punctuation">(</span><span class="token builtin">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">/</span><span class="token operator">*</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">*</span><span class="token operator">/</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">//</span> \u533A\u95F4 <span class="token punctuation">[</span>l<span class="token punctuation">,</span> r<span class="token punctuation">]</span> \u88AB\u5212\u5206\u6210 <span class="token punctuation">[</span>l<span class="token punctuation">,</span> mid<span class="token punctuation">]</span> \u548C <span class="token punctuation">[</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">]</span> \u65F6\u4F7F\u7528\uFF1A
<span class="token builtin">int</span> bsearch<span class="token punctuation">(</span><span class="token builtin">int</span> l<span class="token punctuation">,</span> <span class="token builtin">int</span> r<span class="token punctuation">)</span><span class="token punctuation">:</span>
    l<span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
    
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">:</span>
        mid <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>check<span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
          	r <span class="token operator">=</span> mid
        <span class="token keyword">else</span> <span class="token punctuation">:</span>
          	l <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
    
    <span class="token keyword">return</span> l


<span class="token operator">//</span> \u68C0\u67E5 x \u662F\u5426\u6EE1\u8DB3\u67D0\u79CD\u6027\u8D28
<span class="token builtin">bool</span> check<span class="token punctuation">(</span><span class="token builtin">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">/</span><span class="token operator">*</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">*</span><span class="token operator">/</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u6A21\u677F\u65F6\uFF0C\u5148\u901A\u8FC7 check \u51FD\u6570\u627E\u5230\u7B49\u4E8E mid \u7684\u8FB9\u754C\uFF0C\u7136\u540E\u5206\u60C5\u51B5\u5224\u65AD\uFF1A</p><ul><li><mark>\u82E5 <code>l = mid</code>\uFF0C\u5219\u5BF9\u5E94 <code>r = mid - 1</code>\uFF0C\u540C\u65F6\u8BA1\u7B97 mid \u65F6\u9700\u8981 <code>+ 1</code>\uFF1B</mark></li><li>\u82E5 <code>r = mid</code>\uFF0C\u5219\u5BF9\u5E94 <code>l = mid + 1</code>\u3002</li></ul><blockquote><p><u>\u8BF4\u660E</u></p><p>\u4E3A\u4EC0\u4E48\u8BA1\u7B97 mid \u65F6\u9700\u8981 <code>+ 1</code>\uFF1F</p><p>\u5F53 <code>l = r - 1</code> \u65F6\uFF0C<code>mid = l + r &gt;&gt; 1 = l</code>\uFF0C\u82E5\u66F4\u65B0\u8BED\u53E5\u4E3A <code>l = mid</code>\uFF0C\u5219\u533A\u95F4\u672A\u53D8\u5316\uFF0C\u4F1A\u5BFC\u81F4\u6B7B\u5FAA\u73AF\uFF0C\u56E0\u6B64\u9700\u8981 <code>+ 1</code> \u64CD\u4F5C\u3002</p></blockquote><h2 id="\u8FB9\u754C\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u8FB9\u754C\u5904\u7406" aria-hidden="true">#</a> <a href="(https://leetcode.cn/problems/search-insert-position/solution/dai-ma-sui-xiang-lu-che-di-jiang-tou-er-5zs9r/)">\u8FB9\u754C\u5904\u7406</a></h2><ul><li><p>\u5230\u5E95\u662F while(left &lt; right) \u8FD8\u662F while(left &lt;= right)\uFF0C\u5230\u5E95\u662Fright = middle\u5462\uFF0C\u8FD8\u662F\u8981right = middle - 1\u5462\uFF1F</p><p>\u89E3\u51B3\u65B9\u6CD5\uFF1A\u5FAA\u73AF\u4E0D\u53D8\u91CF</p><p><img src="https://cdn.jsdelivr.net/gh/crush598/image@main/\u4E8C\u5206/iShot_2022-08-14_23.18.12.png" alt="\u91CD\u70B9\u6982\u51B5"></p></li></ul>`,10),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","2023-04-05-Binary-search.html.vue"]]);export{r as default};
