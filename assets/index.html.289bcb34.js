import{_ as n,o as s,c as a,d as p}from"./app.d1221076.js";const t={},o=p(`<p>\u8BB0\u5F55\u4E0B\u6570\u636E\u6BD4\u8D5B\u53EF\u4EE5\u4F7F\u7528\u7684\u4E00\u4E9B\u5C0F trick \uFF0C<s>\u4F46\u53CD\u6B63\u4E5F\u6CA1\u4EBA\u770B\u4E5F\u5C31\u65E0\u6240\u8C13\u4E86</s>\u3002</p><hr><ul><li><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>  np<span class="token punctuation">.</span>set_printoptions<span class="token punctuation">(</span>precision<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># reduced display precision on numpy arrays</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">## \u7ED8\u5236\u7BB1\u56FE\uFF08\u76D2\u56FE\uFF09</span>

fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span>figsize <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">## \u6307\u5B9A\u7ED8\u56FE\u5BF9\u8C61\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6</span>
sns<span class="token punctuation">.</span>boxplot<span class="token punctuation">(</span>tran_data<span class="token punctuation">[</span><span class="token string">&#39;V0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> orient <span class="token operator">=</span> <span class="token string">&quot;v&quot;</span><span class="token punctuation">,</span> width <span class="token operator">=</span> o<span class="token punctuation">.</span><span class="token number">5</span><span class="token punctuation">)</span>

<span class="token comment"># ---------</span>
column <span class="token operator">=</span> train_data<span class="token punctuation">.</span>columns<span class="token punctuation">.</span>tolist<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">39</span><span class="token punctuation">]</span>
fig <span class="token operator">=</span> plt<span class="token punctuation">.</span>figure<span class="token punctuation">(</span>figsize <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">,</span> dpi <span class="token operator">=</span> <span class="token number">75</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">38</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    plt<span class="token punctuation">.</span>subplot<span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    sns<span class="token punctuation">.</span>boxplot<span class="token punctuation">(</span>train_data<span class="token punctuation">[</span>column<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> orient <span class="token operator">=</span> <span class="token string">&quot;v&quot;</span><span class="token punctuation">,</span> width <span class="token operator">=</span> <span class="token number">0.5</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>ylable<span class="token punctuation">(</span>column<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> frontsize<span class="token operator">=</span><span class="token number">36</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,3),e=[o];function c(u,l){return s(),a("div",null,e)}var r=n(t,[["render",c],["__file","index.html.vue"]]);export{r as default};
