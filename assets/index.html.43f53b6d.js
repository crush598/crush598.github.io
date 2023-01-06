import{_ as n,o as s,c as a,d as t}from"./app.a44b6e94.js";const p={},e=t(`<p>\u4E0D\u7BA1\u662F\u6309\u516C\u5386\u65B0\u5E74\uFF0C\u8FD8\u662F\u6309\u4E2D\u56FD\u65B0\u5E74\uFF0C\u5728\u8FD9\u4E2A\u70B9\u8BF4\u65B0\u5E74\u5FEB\u4E50\u90FD\u663E\u5F97\u683C\u683C\u4E0D\u5165\uFF0C<s>\u4F46\u53CD\u6B63\u4E5F\u6CA1\u4EBA\u770B\u4E5F\u5C31\u65E0\u6240\u8C13\u4E86</s>\u3002</p><hr><ul><li><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>  np<span class="token punctuation">.</span>set_printoptions<span class="token punctuation">(</span>precision<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span>  <span class="token comment"># reduced display precision on numpy arrays</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>  \u6570\u636E\u53EF\u89C6\u5316
  <span class="token comment"># Create a scatter plot of the data. To change the markers to red &quot;x&quot;,</span>
  <span class="token comment"># we used the &#39;marker&#39; and &#39;c&#39; parameters</span>
  plt<span class="token punctuation">.</span>scatter<span class="token punctuation">(</span>x_train<span class="token punctuation">,</span> y_train<span class="token punctuation">,</span> marker<span class="token operator">=</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">,</span> c<span class="token operator">=</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span> 
  
  <span class="token comment"># Set the title</span>
  plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&quot;Profits vs. Population per city&quot;</span><span class="token punctuation">)</span>
  <span class="token comment"># Set the y-axis label</span>
  plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">&#39;Profit in $10,000&#39;</span><span class="token punctuation">)</span>
  <span class="token comment"># Set the x-axis label</span>
  plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">&#39;Population of City in 10,000s&#39;</span><span class="token punctuation">)</span>
  plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">## \u5747\u65B9\u8BEF\u5DEE</span>
<span class="token keyword">from</span> sklearn<span class="token punctuation">.</span>metrics <span class="token keyword">import</span> mean_squared_error

mean_squared_error<span class="token punctuation">(</span>y_test<span class="token punctuation">,</span> y_predict<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">## \u7ED8\u5236\u7BB1\u56FE\uFF08\u76D2\u56FE\uFF09</span>

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,3),o=[e];function c(i,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
