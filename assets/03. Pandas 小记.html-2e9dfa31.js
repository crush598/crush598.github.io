const a=JSON.parse(`{"key":"v-4eb97fc3","path":"/posts/03.%20%E5%B7%A5%E5%85%B7/03.%20Pandas%20%E5%B0%8F%E8%AE%B0.html","title":"Pandas 小记","lang":"zh-CN","frontmatter":{"title":"Pandas 小记","date":"2022-09-27T23:31:36.000Z","category":["AI"],"tag":["工具"]},"headers":[{"level":2,"title":"Pandas 数据读取","slug":"pandas-数据读取","link":"#pandas-数据读取","children":[]},{"level":2,"title":"Pandas 的数据结构","slug":"pandas-的数据结构","link":"#pandas-的数据结构","children":[{"level":3,"title":"DataFrame：二维数据，整个表格，多行多列","slug":"dataframe-二维数据-整个表格-多行多列","link":"#dataframe-二维数据-整个表格-多行多列","children":[]},{"level":3,"title":"Series：一维数据，一行或一列","slug":"series-一维数据-一行或一列","link":"#series-一维数据-一行或一列","children":[]}]},{"level":2,"title":"Pandas 数据查询","slug":"pandas-数据查询","link":"#pandas-数据查询","children":[]}],"git":{},"readingTime":{"minutes":0.66,"words":197},"localizedDate":"2022年9月28日","filePathRelative":"posts/03. 工具/03. Pandas 小记.md","excerpt":"<h2> Pandas 数据读取</h2>\\n<p>使用pd.read_csv读取数据</p>\\n<p><code>fapath = \\"***\\"</code></p>\\n<p><code>data = pd.read_csv(fapath,sep='',header=None,names=[] ) </code></p>\\n<details class=\\"custom-container details\\"><summary>数据探索相关</summary>\\n<p>查看前几行数据: <code>data.head</code></p>\\n<p>常看数据的形状：<code>data.shape</code></p>\\n<p>查看列名列表：<code>data.columns</code></p>\\n<p>常看索引列：<code>data.index</code></p>\\n<p>查看每列的数据类型：<code>data.dtypes</code></p>\\n</details>","copyright":{"author":"Hush"}}`);export{a as data};
