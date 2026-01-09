# RNA-Navigator Pro (中文繁體)

## 摘要
**RNA-Navigator Pro** 是一款學術級生物物理模擬套件，旨在實現 RNA 三級結構穩定性的快速篩選與動力學通量分析。

## 系統架構
本套件採用 **整潔模塊化 (Clean Modular)** 架構：
- **前端 (UI)**: 基於 React 和 Tailwind CSS 的界面（位於 `App.tsx`）。
- **核心引擎 (後端邏輯)**: 所有生物物理計算都解耦到 `physics-kernel.ts` 中。這使得模擬引擎可以作為獨立庫使用。

## 如何運行

### 1. 完整應用程序 (UI + 核心)
運行帶有圖形界面的完整儀表板：
```bash
# 安裝依賴項目
npm install

# 啟動開發伺服器
npm run dev
```

### 2. 模塊化核心調用
`physics-kernel.ts` 具有高度可移植性。您可以將 `performBiophysicalSimulation` 導入任何 TypeScript/JavaScript 環境（如 CLI 工具或後端服務器），而無需依賴 React。

## 計算方法論
`physics-kernel.ts` 中的引擎採用 **粗粒化 (Coarse-Grained)** 模型：
1. **可微物理**: 計算自由能梯度。
2. **動力學**: 計算觀測速率 (k_obs)。

## 授權條款
根據 [MIT 授權條款](LICENSE) 發佈。