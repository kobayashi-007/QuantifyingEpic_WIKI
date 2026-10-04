// 一键部署：npm run deploy "提交说明"
// 流程：git add -A → git commit → git push
import { execSync } from 'node:child_process'

const message = process.argv[2] || `docs: 更新 ${new Date().toLocaleString('zh-CN', { hour12: false })}`

const run = (cmd) => {
  console.log(`> ${cmd}`)
  execSync(cmd, { stdio: 'inherit' })
}

// 没有改动时直接退出
const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim()
if (!status) {
  console.log('没有需要提交的改动。')
  process.exit(0)
}

run('git add -A')
run(`git commit -m "${message.replace(/"/g, '\\"')}"`)
run('git push')
console.log('\n✅ 已推送到 GitHub，Cloudflare 将自动部署')
