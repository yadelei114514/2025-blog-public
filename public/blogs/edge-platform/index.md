**边缘平台核心差异**：**Cloudflare Workers** 全球节点最多、冷启动最快、免费额度高；**Vercel Edge** 前端框架（Next.js）原生适配、开发体验最佳；**Netlify Edge** 适合 JAMstack、表单/身份集成强；**AWS Lambda@Edge** 生态最深、企业级能力全；**Deno Deploy** Deno/TS 极致性能、简洁轻量。

---

## 一、主流平台核心概览（2026）

### 1. Cloudflare Workers / Pages
- **定位**：纯边缘计算 + 静态托管一体化，全球 CDN 原生算力
- **节点**：全球 300+ 城市、100+ 国家，95% 用户 50ms 内可达
- **runtime**：V8 Isolates（超轻量、毫秒级冷启动）
- **语言**：JS/TS、Python、Rust、C/C++、Wasm
- **存储**：KV（键值）、R2（对象存储）、D1（SQL 数据库）、Durable Objects
- **免费额度**：每日 10 万请求、无限带宽、Pages 完全免费
- **付费**：$5/月起（1000 万请求），超量 $0.5/百万请求

### 2. Vercel Edge Functions / Edge Runtime
- **定位**：前端框架优先（Next.js 原生）、全栈边缘部署
- **节点**：全球 20+ 核心区域（欧美密集、亚太较少）
- **runtime**：Edge Runtime（兼容 Web API）
- **语言**：JS/TS、Wasm
- **存储**：Vercel KV、Postgres、Blob（生态集成）
- **免费额度**：100GB 带宽、100GB-h 函数时长
- **付费**：$20/月起（Pro）

### 3. Netlify Edge Functions
- **定位**：JAMstack 生态、静态站 + 边缘逻辑
- **节点**：全球 100+ POP（依托 AWS + 自有节点）
- **runtime**：Deno 原生
- **语言**：JS/TS、Wasm
- **存储**：Netlify Blob、Fauna/ Supabase 集成
- **免费额度**：100GB 带宽、300 构建分钟、10 万函数调用
- **付费**：$19/月起

### 4. AWS Lambda@Edge
- **定位**：企业级、CloudFront 边缘扩展、AWS 全生态
- **节点**：CloudFront 40+ 核心区域（北美/欧洲为主）
- **runtime**：Node.js、Python、Java、Go、.NET（标准 Lambda）
- **存储**：S3、DynamoDB、RDS 全集成
- **免费额度**：CloudFront 免费 + Lambda 免费额度（边缘单独计费）
- **付费**：请求 + 时长 + 数据传输（阶梯计费）

### 5. Deno Deploy
- **定位**：Deno/TypeScript 原生、极简边缘、高性能
- **节点**：全球 30+ 区域（Deno 自有网络）
- **runtime**：Deno（原生 TS、无编译、安全沙箱）
- **语言**：TS/JS、Wasm
- **存储**：Deno KV（内置分布式键值）
- **免费额度**：每日 10 万请求、100GB 带宽
- **付费**：$10/月起（Pro）

---

## 二、核心维度对比（干货表格）

| 维度 | Cloudflare Workers | Vercel Edge | Netlify Edge | AWS Lambda@Edge | Deno Deploy |
|:--- |:--- |:--- |:--- |:--- |:--- |
| **冷启动** | 1–5ms（最优） | 10–50ms | 10–50ms | 50–200ms（最慢） | 5–15ms |
| **执行限制** | 内存 128MB、超时 30s | 内存 1–3GB、超时 15min | 内存 512MB、超时 50s | 内存 10GB、超时 15min | 内存 256MB、超时 10s |
| **全球覆盖** | 300+ 节点（最强） | 20+ 区域 | 100+ POP | 40+ 区域 | 30+ 区域 |
| **国内访问** | 优秀（大陆优化） | 一般（跨境） | 一般（跨境） | 差（跨境） | 一般（跨境） |
| **开发体验** | Wrangler CLI、文档全 | 零配置、Git 集成强 | netlify.toml、表单/认证内置 | 复杂、AWS 控制台 | 极简、单文件部署 |
| **静态托管** | Cloudflare Pages（免费无限带宽） | Vercel Hosting（ISR 最强） | Netlify Sites（构建生态） | S3 + CloudFront | Deno Deploy Sites |
| **状态/存储** | KV/R2/D1/Durable Objects | Vercel KV/Postgres | Netlify Blob | S3/DynamoDB/RDS | Deno KV（内置） |
| **免费额度** | 极高（日 10 万请求、无限带宽） | 高（100GB 带宽） | 中（100GB 带宽） | 低（仅基础免费） | 高（日 10 万请求） |
| **适合场景** | 全球低延迟、API、安全、静态站 | Next.js 全栈、SSR/ISR、前端项目 | JAMstack、营销站、表单 | 企业级、AWS 生态、复杂逻辑 | Deno/TS 项目、极简 API |

---

## 三、选型建议（直接照抄）

### ✅ 选 Cloudflare Workers 如果你：
- 要**全球最低延迟**、国内访问快
- 预算有限、追求**高免费额度**
- 做 API、边缘路由、WAF、图片优化、静态站
- 不想被厂商锁定、轻量无状态服务

### ✅ 选 Vercel Edge 如果你：
- 用 **Next.js**（原生支持、零配置）
- 做 SSR/ISR、全栈应用、前端优先
- 要极致开发体验、Git 自动部署
- 欧美用户为主、不纠结国内速度

### ✅ 选 Netlify Edge 如果你：
- 做 **JAMstack 静态站**、博客、文档
- 需要**表单处理、用户认证、构建自动化**
- 团队协作、多项目管理
- 不想写复杂后端、偏静态 + 轻边缘

### ✅ 选 AWS Lambda@Edge 如果你：
- 已经在 **AWS 生态**（S3/CloudFront/DynamoDB）
- 企业级、复杂业务逻辑、长时任务、大内存
- 合规、监控、权限要求高
- 能接受冷启动慢、价格高

### ✅ 选 Deno Deploy 如果你：
- 用 **Deno/TypeScript**、追求原生性能
- 极简架构、单文件服务、无依赖
- 快速原型、小型 API、边缘脚本
- 讨厌配置、要一键部署

---

## 四、避坑要点（实战总结）
- **1. 冷启动差异极大**：简单请求选 Cloudflare/Deno；复杂长时选 Vercel/AWS
- **2. 国内访问**：国际平台只有 Cloudflare 可用；国内可用阿里云 Edge、腾讯云 Edge
- **3. 状态存储**：边缘优先无状态；要状态用 Cloudflare KV/Deno KV 而非传统 DB
- **4. 成本陷阱**：AWS 数据传输费高；Vercel/Netlify 超量后贵；Cloudflare 最可控
- **5. 调试难度**：Cloudflare/Wrangler 本地调试强；Vercel 预览环境好；AWS 最难调试

---

## 五、一句话总结
- **个人博客/静态站/全球 API → Cloudflare Pages + Workers（首选）**
- **Next.js 全栈 → Vercel Edge**
- **JAMstack + 表单 → Netlify Edge**
- **企业 AWS 生态 → Lambda@Edge**
- **Deno/TS 极简 → Deno Deploy**
