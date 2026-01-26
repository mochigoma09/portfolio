# GOMA's LAB - Portfolio & Creative Projects

Webエンジニア兼カメラマンとして活動する **後藤 将宏（Goma-chan）** のポートフォリオ、および個人開発プロジェクトを集約したリポジトリです。
「エンジニアリング（論理）× クリエイティブ（感性）」をテーマに、最新技術を用いたプロダクトを公開しています。

**Live Demo:** [https://gomagomanomori.f5.si/](https://gomagomanomori.f5.si/)

---

## 🚀 主要プロジェクト (Main Projects)

### 1. Sweets Palette (16タイプ性格診断)
GoogleのAI（Gemini）を活用し、心理学的整合性を高めた次世代の16タイプ性格診断アプリ。
- **Concept**: ユーザーの性格を「甘さの質」になぞらえ、スイーツとしてアウトプット。
- **Tech Logic**: Gemini APIを通じた回答分析のチューニング。
- **Backend**: Laravel (PHP)

### 2. Aquratum Official Website Project (架空アイドル公式サイト)
地元・東京都昭島市の「深層地下水」と「160万年前の地層」をコンセプトにしたアイドルグループの公式サイト。
- **Design**: 「反重力 & 流体工学」をテーマにしたモダンなUI。
- **Frontend**: Vue.js 3 (Composition API) / Vite / Tailwind CSS
- **Features**: モバイルファースト設計、3D視差効果を用いたメンバーカード、予約導線シミュレーション。

---

## 🛠 技術スタック (Tech Stack)

| Category | Technology |
| :--- | :--- |
| **Frontend** | Vue.js 3, Vite, Tailwind CSS, HTML5/CSS3 (Vanilla) |
| **Backend** | PHP 8.x, Laravel 10.x |
| **AI Integration** | Google Gemini Pro API |
| **Tools** | Git, GitHub Actions, VS Code |
| **Creative** | Photography, Adobe Lightroom, Photoshop |

---

## 📂 ディレクトリ構成 (Project Structure)

```text
.
├── index.html            # ポートフォリオTOPページ
├── contact.html          # お問い合わせページ（Instagram誘導）
├── privacy-policy.html   # プライバシーポリシー（AdSense準拠）
├── sitemap.xml           # サイトマップ
├── robots.txt            # クローラー最適化設定
├── sweets-palette/       # 16タイプ診断プロジェクト（Laravel）
└── aquratum/             # アイドル公式サイトプロジェクト（Vue.js/Vite）