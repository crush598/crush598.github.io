import{_ as n,o as a,c as s,d as e}from"./app.aed97a80.js";const t={},p=e(`<h1 id="numpy-\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#numpy-\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> NumPy \u6570\u636E\u7C7B\u578B</h1><h2 id="\u521B\u5EFA\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6570\u7EC4" aria-hidden="true">#</a> \u521B\u5EFA\u6570\u7EC4</h2><details class="custom-container details"><summary>1. \u4ECE Python \u7684\u5217\u8868 List \u548C\u5D4C\u5957\u5217\u8868\u521B\u5EFA array</summary><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>x <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
X <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># array([1, 2, 3, 4, 5, 6, 7, 8])</span>
<span class="token comment"># array([[1, 2, 3, 4],[5, 6, 7, 8]])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>2. \u4F7F\u7528\u9884\u5B9A\u51FD\u6570 arange\u3001ones/ones_like\u3001zeros/zeros_like\u3001empty/empty_like\u3001full/full_like\u3001eye \u7B49\u51FD\u6570\u521B\u5EFA</summary><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u4F7F\u7528 arange \u521B\u5EFA\u6570\u5B57\u5E8F\u5217</span>
<span class="token comment"># arange([start,] stop[, step,], dtype=None)</span>
np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
np<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment"># \u4F7F\u7528 ones \u521B\u5EFA\u5168\u662F 1 \u7684\u6570\u7EC4\u3001\u4F7F\u7528 zeros \u521B\u5EFA\u5168\u662F 0 \u7684\u6570\u7EC4\u3001\u4F7F\u7528 full \u521B\u5EFA\u6307\u5B9A\u503C\u7684\u6570\u7EC4</span>
<span class="token comment"># np.ones(shape, dtype=None, order=&#39;C&#39;)  np.full(shape, fill_value, dtype=None, order=&#39;C&#39;)</span>
np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span>dtype<span class="token operator">=</span><span class="token builtin">int</span><span class="token punctuation">)</span>
np<span class="token punctuation">.</span>ones<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>dtype<span class="token operator">=</span><span class="token builtin">float</span><span class="token punctuation">)</span>
np<span class="token punctuation">.</span>full<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">3.14</span><span class="token punctuation">)</span>

<span class="token comment"># \u4F7F\u7528ones_like\u521B\u5EFA\u5F62\u72B6\u76F8\u540C\u7684\u6570\u7EC4\u3001\u4F7F\u7528zeros_like\u521B\u5EFA\u5F62\u72B6\u76F8\u540C\u7684\u6570\u7EC4\u3001\u4F7F\u7528full_like\u521B\u5EFA\u5F62\u72B6\u76F8\u540C\u7684\u6570\u7EC4</span>
np<span class="token punctuation">.</span>full_like<span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">)</span>
np<span class="token punctuation">.</span>full_like<span class="token punctuation">(</span>X<span class="token punctuation">,</span> <span class="token number">666</span><span class="token punctuation">)</span>

<span class="token comment"># array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])</span>
<span class="token comment"># array([2, 4, 6, 8])</span>

<span class="token comment"># array([666, 666, 666, 666, 666, 666, 666, 666])</span>
<span class="token comment"># array([[666, 666, 666, 666],</span>
<span class="token comment">#        [666, 666, 666, 666]])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>3.\u751F\u6210\u968F\u673A\u6570\u7684 np.random \u6A21\u5757\u6784\u5EFA</summary><ul><li><img src="https://cdn.jsdelivr.net/gh/crush598/image@main/numpy202210012136140.png" alt="iShot_2022-10-01_21.35.22" style="zoom:50%;"></li></ul></details><p><mark>\u8BF7\u8BB0\u4F4F\uFF0C\u4E0D\u540C\u4E8E Python \u7684 list\uFF0CNumPy \u7684 array \u8981\u6C42\u6570\u7EC4<u>\u5FC5\u987B\u5305\u542B\u540C\u4E00\u7C7B\u578B\u7684\u6570\u636E</u>\u3002\u5982\u679C\u7C7B\u578B\u4E0D\u5339\u914D\uFF0CNumPy \u5C06\u4F1A\u5411\u4E0A\u8F6C\u6362\uFF08\u5982\u679C\u53EF\u884C\uFF09\u3002\u8FD9\u91CC\u6574\u578B\u88AB\u8F6C\u6362\u4E3A\u6D6E\u70B9\u578B:</mark></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>In<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">3.14</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span> array<span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token number">3.14</span><span class="token punctuation">,</span> <span class="token number">4.</span> <span class="token punctuation">,</span> <span class="token number">2.</span> <span class="token punctuation">,</span> <span class="token number">3.</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="array-\u672C\u8EAB\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#array-\u672C\u8EAB\u7684\u5C5E\u6027" aria-hidden="true">#</a> array \u672C\u8EAB\u7684\u5C5E\u6027</h2><ul><li><mark>ndim</mark>\uFF08 array \u7684\u7EF4\u5EA6\uFF09</li><li><mark>shape</mark>\uFF08 array \u6BCF\u4E2A\u7EF4\u5EA6\u7684\u5927\u5C0F\uFF09</li><li><mark>size</mark>\uFF08array \u7684\u603B\u5927\u5C0F\uFF09</li><li><mark>dtype</mark> ( array \u4E2D\u5143\u7D20\u7684\u6570\u636E\u7C7B\u578B)</li></ul><h2 id="\u6309\u7D22\u5F15\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u6309\u7D22\u5F15\u67E5\u8BE2" aria-hidden="true">#</a> \u6309\u7D22\u5F15\u67E5\u8BE2</h2><p>\u5173\u4E8E array \u5207\u7247\u6709\u4E00\u70B9\u5F88\u91CD\u8981\u4E5F\u975E\u5E38\u6709\u7528\uFF0C\u90A3\u5C31\u662F <strong>array \u5207\u7247\u8FD4\u56DE\u7684\u662F array \u6570\u636E\u7684\u89C6\u56FE</strong>\uFF0C\u800C\u4E0D\u662F\u6570\u503C\u6570\u636E\u7684\u526F\u672C\u3002\u8FD9\u4E00\u70B9\u4E5F\u662F NumPy \u6570\u7EC4\u5207\u7247\u548C Python \u5217\u8868\u5207\u7247\u7684\u4E0D\u540C\u4E4B\u5904\uFF1A<mark><u>numpy array \u5207\u7247\u7684\u4FEE\u6539\u4F1A\u4FEE\u6539\u539F\u6765\u7684\u6570\u7EC4</u></mark></p><p>\u5C3D\u7BA1\u6570\u7EC4\u89C6\u56FE\u6709\u4E00\u4E9B\u975E\u5E38\u597D\u7684\u7279\u6027\uFF0C\u4F46\u662F\u5728\u6709\u4E9B\u65F6\u5019\u660E\u786E\u5730\u590D\u5236\u6570\u7EC4\u91CC\u7684\u6570\u636E\u6216\u5B50\u6570\u7EC4\u4E5F\u662F\u975E\u5E38\u6709\u7528\u7684\u3002\u53EF\u4EE5\u5F88\u7B80\u5355\u5730\u901A\u8FC7 <code>copy()</code> \u65B9\u6CD5\u5B9E\u73B0</p><h3 id="_1-\u57FA\u7840\u7D22\u5F15-\u5E38\u89C4\u6570\u7EC4\u7D22\u5F15\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u7840\u7D22\u5F15-\u5E38\u89C4\u6570\u7EC4\u7D22\u5F15\u7684\u64CD\u4F5C" aria-hidden="true">#</a> 1. \u57FA\u7840\u7D22\u5F15 ---- \u5E38\u89C4\u6570\u7EC4\u7D22\u5F15\u7684\u64CD\u4F5C</h3><ul><li><img src="https://cdn.jsdelivr.net/gh/crush598/image@main/numpy202210012146606.png" alt="iShot_2022-10-01_21.45.13" style="zoom:50%;"></li></ul><h3 id="_2-\u795E\u5947\u7D22\u5F15-\u7528\u6574\u6570\u6570\u7EC4\u8FDB\u884C\u7684\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_2-\u795E\u5947\u7D22\u5F15-\u7528\u6574\u6570\u6570\u7EC4\u8FDB\u884C\u7684\u7D22\u5F15" aria-hidden="true">#</a> 2. \u795E\u5947\u7D22\u5F15 ---- \u7528\u6574\u6570\u6570\u7EC4\u8FDB\u884C\u7684\u7D22\u5F15</h3><ul><li><img src="https://cdn.jsdelivr.net/gh/crush598/image@main/numpy202210012155699.png" alt="iShot_2022-10-01_21.54.48" style="zoom:50%;"></li></ul><h3 id="_3-\u5E03\u5C14\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_3-\u5E03\u5C14\u7D22\u5F15" aria-hidden="true">#</a> 3. \u5E03\u5C14\u7D22\u5F15</h3><ul><li><img src="https://cdn.jsdelivr.net/gh/crush598/image@main/numpy202210012205113.png" alt="iShot_2022-10-01_22.03.45" style="zoom:50%;"></li><li><img src="https://cdn.jsdelivr.net/gh/crush598/image@main/numpy202210012205817.png" alt="iShot_2022-10-01_22.04.02" style="zoom:50%;"></li></ul><h3 id="\u6570\u7EC4\u62FC\u63A5\u4E0E\u5206\u88C2" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u62FC\u63A5\u4E0E\u5206\u88C2" aria-hidden="true">#</a> \u6570\u7EC4\u62FC\u63A5\u4E0E\u5206\u88C2</h3><p>\u62FC\u63A5\u6216\u8FDE\u63A5 NumPy \u4E2D\u7684\u4E24\u4E2A\u6570\u7EC4\u4E3B\u8981\u7531 <code>np.concatenate</code>\u3001<code>np.vstack</code> \u548C <code>np.hstack</code> \u4F8B\u7A0B\u5B9E\u73B0\u3002</p><h3 id="random-\u968F\u673A\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#random-\u968F\u673A\u51FD\u6570" aria-hidden="true">#</a> random \u968F\u673A\u51FD\u6570</h3><ul><li><p>\u5B98\u65B9\u6587\u6863\u5730\u5740\uFF1Ahttps://docs.scipy.org/doc/numpy-1.14.0/reference/routines.random.html</p></li><li><p><img src="https://cdn.jsdelivr.net/gh/crush598/image@main/numpy202210012211223.png" alt="numpy_random_functions"></p></li></ul><h2 id="\u6570\u5B66\u7EDF\u8BA1\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B66\u7EDF\u8BA1\u51FD\u6570" aria-hidden="true">#</a> \u6570\u5B66\u7EDF\u8BA1\u51FD\u6570</h2><ul><li><img src="https://cdn.jsdelivr.net/gh/crush598/image@main/numpy202210012216451.png" alt="iShot_2022-10-01_22.16.04"></li></ul><h3 id="numpy-\u7684-axis-\u53C2\u6570\u7684\u7528\u9014" tabindex="-1"><a class="header-anchor" href="#numpy-\u7684-axis-\u53C2\u6570\u7684\u7528\u9014" aria-hidden="true">#</a> Numpy \u7684 axis \u53C2\u6570\u7684\u7528\u9014</h3><ul><li><img src="https://cdn.jsdelivr.net/gh/crush598/image@main/numpy202210012217421.png" alt="iShot_2022-10-01_22.17.32" style="zoom:50%;"></li></ul><h3 id="\u7ED9\u6570\u7EC4\u589E\u52A0\u7EF4\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u6570\u7EC4\u589E\u52A0\u7EF4\u5EA6" aria-hidden="true">#</a> \u7ED9\u6570\u7EC4\u589E\u52A0\u7EF4\u5EA6</h3><p><strong><em>3 \u79CD\u65B9\u6CD5\uFF1A</em></strong></p><ul><li>np.newaxis\uFF1A\u5173\u952E\u5B57\uFF0C\u4F7F\u7528\u7D22\u5F15\u7684\u8BED\u6CD5\u7ED9\u6570\u7EC4\u6DFB\u52A0\u7EF4\u5EA6</li><li>np.expand_dims(arr, axis)\uFF1A\u65B9\u6CD5\uFF0C\u548C np.newaxis \u5B9E\u73B0\u4E00\u6837\u7684\u529F\u80FD\uFF0C\u7ED9 arr \u5728 axis \u4F4D\u7F6E\u6DFB\u52A0\u7EF4\u5EA6</li><li>np.reshape(a, newshape)\uFF1A\u65B9\u6CD5\uFF0C\u7ED9\u4E00\u4E2A\u7EF4\u5EA6\u8BBE\u7F6E\u4E3A 1 \u5B8C\u6210\u5347\u7EF4</li></ul><h3 id="\u6570\u7EC4\u5408\u5E76\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u5408\u5E76\u64CD\u4F5C" aria-hidden="true">#</a> \u6570\u7EC4\u5408\u5E76\u64CD\u4F5C</h3><p>\u4EE5\u4E0B\u64CD\u4F5C\u5747\u53EF\u4EE5\u5B9E\u73B0\u6570\u7EC4\u5408\u5E76\uFF1A</p><ul><li>np.concatenate(array_list, axis=0/1\uFF09\uFF1A\u6CBF\u7740\u6307\u5B9A axis \u8FDB\u884C\u6570\u7EC4\u7684\u5408\u5E76</li><li>np.vstack \u6216\u8005 np.row_stack(array_list)\uFF1A\u5782\u76F4 vertically\u3001\u6309\u884C row wise \u8FDB\u884C\u6570\u636E\u5408\u5E76</li><li>np.hstack \u6216\u8005 np.column_stack(array_list)\uFF1A\u6C34\u5E73 horizontally\u3001\u6309\u5217 column wise \u8FDB\u884C\u6570\u636E\u5408\u5E76</li></ul>`,32),c=[p];function i(l,o){return a(),s("div",null,c)}var r=n(t,[["render",i],["__file","Numpy \u5C0F\u8BB0.html.vue"]]);export{r as default};
