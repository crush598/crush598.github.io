const n=JSON.parse(`{"key":"v-53a83969","path":"/posts/03.%20%E5%B7%A5%E5%85%B7/","title":"工具","lang":"zh-CN","frontmatter":{"title":"工具","date":"2022-08-23T16:26:09.000Z","category":["AI"],"tag":["工具"]},"headers":[],"git":{},"readingTime":{"minutes":0.29,"words":86},"localizedDate":"2022年8月24日","filePathRelative":"posts/03. 工具/README.md","excerpt":"<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token comment\\">## 绘制箱图（盒图）</span>\\n\\nfig <span class=\\"token operator\\">=</span> plt<span class=\\"token punctuation\\">.</span>figure<span class=\\"token punctuation\\">(</span>figsize <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">## 指定绘图对象的宽度和高度</span>\\nsns<span class=\\"token punctuation\\">.</span>boxplot<span class=\\"token punctuation\\">(</span>tran_data<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'V0'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> orient <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"v\\"</span><span class=\\"token punctuation\\">,</span> width <span class=\\"token operator\\">=</span> o<span class=\\"token punctuation\\">.</span><span class=\\"token number\\">5</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># ---------</span>\\ncolumn <span class=\\"token operator\\">=</span> train_data<span class=\\"token punctuation\\">.</span>columns<span class=\\"token punctuation\\">.</span>tolist<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">:</span><span class=\\"token number\\">39</span><span class=\\"token punctuation\\">]</span>\\nfig <span class=\\"token operator\\">=</span> plt<span class=\\"token punctuation\\">.</span>figure<span class=\\"token punctuation\\">(</span>figsize <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token number\\">80</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">60</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> dpi <span class=\\"token operator\\">=</span> <span class=\\"token number\\">75</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">for</span> i <span class=\\"token keyword\\">in</span> <span class=\\"token builtin\\">range</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">38</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    plt<span class=\\"token punctuation\\">.</span>subplot<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">7</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">8</span><span class=\\"token punctuation\\">,</span> i <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n    sns<span class=\\"token punctuation\\">.</span>boxplot<span class=\\"token punctuation\\">(</span>train_data<span class=\\"token punctuation\\">[</span>column<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> orient <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"v\\"</span><span class=\\"token punctuation\\">,</span> width <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0.5</span><span class=\\"token punctuation\\">)</span>\\n    plt<span class=\\"token punctuation\\">.</span>ylable<span class=\\"token punctuation\\">(</span>column<span class=\\"token punctuation\\">[</span>i<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> frontsize<span class=\\"token operator\\">=</span><span class=\\"token number\\">36</span><span class=\\"token punctuation\\">)</span>\\nplt<span class=\\"token punctuation\\">.</span>show\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"Hush"}}`);export{n as data};
