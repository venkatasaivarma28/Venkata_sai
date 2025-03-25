'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'ja'
type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.certifications': 'Certifications',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    
    // Hero Section
    'hero.greeting': "Hi, I'm Sri Gudibandi",
    'hero.title': 'Full Stack Developer and Security Engineer',
    'hero.description': 'Specializing in secure software development, scalable web applications, and automation. Proven experience in enhancing system performance and delivering robust, user-focused solutions.',
    
    // About Section
    'about.title': 'About Me',
    'about.p1': "I'm a passionate Software Engineer with expertise in building modern web applications. My journey in software development has equipped me with strong problem-solving skills and a deep understanding of web technologies.",
    'about.p2': "I specialize in full-stack development, with a particular focus on React, Node.js, and cloud technologies. I'm always eager to learn new technologies and tackle challenging problems.",
    
    // Quick Facts
    'about.quickFacts': 'Quick Facts',
    'about.facts.graduate': 'Computer Science Graduate',
    'about.facts.fullstack': 'Full-Stack Developer',
    'about.facts.software': 'Software Developer',
    'about.facts.security': 'Cyber Security Analyst',
    'about.facts.learner': 'Continuous Learner',
    'about.facts.team': 'Team Player',
    
    // Section Titles
    'skills.title': 'Skills',
    'certifications.title': 'Certifications',
    'experience.title': 'Experience',
    'projects.title': 'Featured Projects',
    'education.title': 'Education',

    // Skills Section
    'skills.categories.languages': 'Languages',
    'skills.categories.frameworks': 'Frameworks & Libraries',
    'skills.categories.databases': 'Databases',
    'skills.categories.tools': 'Tools & Platforms',

    // Experience Section
    'experience.viewMore': 'View More Projects',
    'experience.viewLess': 'View Less',
    'experience.present': 'Present',
    'experience.company': 'Company',
    'experience.period': 'Period',
    'experience.technologies': 'Technologies Used',
    'experience.job1.title': 'Course Facilitator',
    'experience.job1.description': 'Leading course sessions and providing guidance to students in software engineering principles, testing methodologies, and security management practices. Facilitating hands-on workshops and supporting student learning in an agile environment.',
    
    'experience.job2.title': 'Security and Product Development Engineer Intern',
    'experience.job2.description': 'Developing secure web applications using Three.js and Firebase, implementing AI-powered features, and conducting security assessments. Working with Google Cloud Platform to build scalable solutions.',
    
    'experience.job3.title': 'Teaching Assistant',
    'experience.job3.description': 'Assisting professors in conducting software engineering courses, grading assignments, and mentoring students. Supporting practical sessions in testing methodologies and security concepts.',
    
    'experience.job4.title': 'Software Engineer',
    'experience.job4.description': 'Developed and maintained ETL pipelines using Python and Informatica. Implemented data warehousing solutions and automated processes using shell scripting. Managed MySQL databases for efficient data processing.',
    
    'experience.job5.title': 'Core Team Member',
    'experience.job5.description': 'Led the development of web applications using React and Node.js. Implemented Firebase authentication and real-time database features. Developed TypeScript-based solutions for improved code quality.',

    // Projects Section
    'projects.liveDemo': 'Live Demo',
    'projects.sourceCode': 'Source Code',
    'projects.technologies': 'Technologies Used',
    'projects.filter.all': 'All',
    'projects.filter.cybersecurity': 'Cybersecurity',
    'projects.filter.ml': 'Machine Learning',
    'projects.filter.fullstack': 'Full Stack',
    'projects.filter.web': 'Web Development',

    // Project Titles and Descriptions
    'projects.timeBridgeAI': 'Time Bridge AI',
    'projects.timeBridgeAIDescription': 'An intelligent calendar management system powered by Google Gemini AI that helps users schedule events, create study plans, and set reminders through natural language processing. Features include Google Calendar integration, secure Firebase authentication, interactive chat interface, and smart intent recognition for different types of events.',
    
    'projects.periodicTableAI': 'Periodic Table AI',
    'projects.periodicTableAIDescription': 'An interactive periodic table application powered by AI, developed in collaboration with MXEnergy Labs and Shizuoka University, Japan. Features real-time chemical data integration with RSC API, AI-powered insights, and 3D visualizations of chemical elements.',
    
    'projects.pawsitiveId': 'PawsitiveId',
    'projects.pawsitiveIdDescription': 'A web application designed to estimate dog breeds from user-uploaded photos. Uses machine learning to approximate breed makeup based on physical characteristics, providing a quick alternative to genetic tests.',
    
    'projects.vocalBasedParkinsonsDiseaseDetection': "Vocal Based Parkinson's Disease Detection",
    'projects.vocalBasedParkinsonsDiseaseDetectionDescription': "A research study analyzing algorithm accuracy for Parkinson's disease prediction using vocal data. XGBoost achieved 96% accuracy in classification, demonstrating superior performance.",
    
    'projects.piviWatch': 'PiviWatch',
    'projects.piviWatchDescription': 'An innovative project designed to revolutionize video surveillance through advanced motion detection and encryption technology. Enhances privacy by selectively encrypting areas within video frames where motion is detected.',

    // Education Section
    'education.degree': 'Degree',
    'education.university': 'University',
    'education.period': 'Period',
    'education.gpa': 'GPA',
    'education.courses': 'Key Courses',
    'education.masters': 'Master of Science in Computer Science, Security',
    'education.masters.school': 'Boston University, MA',
    'education.masters.description': 'Specialized in software development, security analysis and management',
    
    'education.bachelors': 'Bachelor of Engineering in Computer Science and Engineering',
    'education.bachelors.school': 'Sathyabama Institute of Science and Technology, India',
    'education.bachelors.description': "Completed project and paper on Vocal based Parkinson's disease detection using machine learning Models",

    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.letsConnect': "Let's Connect",
    'footer.connectText': 'Feel free to reach out on LinkedIn for collaborations or just a friendly hello!',
    'footer.copyright': '© {year} Sri Gudibandi. All rights reserved.',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error loading content',
  },
  ja: {
    // Navigation
    'nav.about': '概要',
    'nav.skills': 'スキル',
    'nav.certifications': '資格',
    'nav.experience': '経験',
    'nav.projects': 'プロジェクト',
    'nav.education': '学歴',
    
    // Hero Section
    'hero.greeting': 'はじめまして、スリ・グディバンディです',
    'hero.title': 'フルスタック開発者・セキュリティエンジニア',
    'hero.description': 'セキュアなソフトウェア開発、スケーラブルなウェブアプリケーション、自動化を専門としています。システムパフォーマンスの向上と堅牢なユーザー重視のソリューションの提供において実績があります。',
    
    // About Section
    'about.title': '私について',
    'about.p1': '私はモダンなウェブアプリケーションの構築を専門とする情熱的なソフトウェアエンジニアです。ソフトウェア開発の経験を通じて、強力な問題解決能力とウェブ技術への深い理解を身につけました。',
    'about.p2': 'フルスタック開発を専門とし、特にReact、Node.js、クラウドテクノロジーに重点を置いています。新しい技術を学び、課題に取り組むことに常に意欲的です。',
    
    // Quick Facts
    'about.quickFacts': '基本情報',
    'about.facts.graduate': 'コンピュータサイエンス卒業生',
    'about.facts.fullstack': 'フルスタック開発者',
    'about.facts.software': 'ソフトウェア開発者',
    'about.facts.security': 'サイバーセキュリティアナリスト',
    'about.facts.learner': '継続的学習者',
    'about.facts.team': 'チームプレイヤー',
    
    // Section Titles
    'skills.title': 'スキル',
    'certifications.title': '資格',
    'experience.title': '職歴',
    'projects.title': '主要プロジェクト',
    'education.title': '学歴',

    // Skills Section
    'skills.categories.languages': 'プログラミング言語',
    'skills.categories.frameworks': 'フレームワーク＆ライブラリ',
    'skills.categories.databases': 'データベース',
    'skills.categories.tools': 'ツール＆プラットフォーム',

    // Experience Section
    'experience.viewMore': 'もっと見る',
    'experience.viewLess': '閉じる',
    'experience.present': '現在',
    'experience.company': '会社',
    'experience.period': '期間',
    'experience.technologies': '使用技術',
    'experience.job1.title': 'コース・ファシリテーター',
    'experience.job1.description': 'ソフトウェアエンジニアリング、テスト方法論、セキュリティ管理の実践において、学生の指導とサポートを行っています。アジャイル環境での実践的なワークショップを実施し、学習支援を提供しています。',
    
    'experience.job2.title': 'セキュリティ・プロダクト開発エンジニアインターン',
    'experience.job2.description': 'Three.jsとFirebaseを使用したセキュアなWebアプリケーションの開発、AI機能の実装、セキュリティ評価を担当。Google Cloud Platformを活用してスケーラブルなソリューションを構築。',
    
    'experience.job3.title': '教育アシスタント',
    'experience.job3.description': 'ソフトウェアエンジニアリングコースの教授補佐、課題の採点、学生指導を担当。テスト方法論とセキュリティ概念の実践セッションをサポート。',
    
    'experience.job4.title': 'ソフトウェアエンジニア',
    'experience.job4.description': 'PythonとInformaticaを使用したETLパイプラインの開発と保守。シェルスクリプトを使用したデータウェアハウスソリューションの実装と自動化。効率的なデータ処理のためのMySQLデータベース管理。',
    
    'experience.job5.title': 'コアチームメンバー',
    'experience.job5.description': 'ReactとNode.jsを使用したWebアプリケーションの開発をリード。Firebase認証とリアルタイムデータベース機能を実装。TypeScriptベースのソリューションを開発してコード品質を向上。',

    // Projects Section
    'projects.liveDemo': 'ライブデモ',
    'projects.sourceCode': 'ソースコード',
    'projects.technologies': '使用技術',
    'projects.filter.all': 'すべて',
    'projects.filter.cybersecurity': 'サイバーセキュリティ',
    'projects.filter.ml': '機械学習',
    'projects.filter.fullstack': 'フルスタック',
    'projects.filter.web': 'ウェブ開発',

    // Project Titles and Descriptions
    'projects.timeBridgeAI': 'タイムブリッジAI',
    'projects.timeBridgeAIDescription': 'Google Gemini AIを活用したインテリジェントなカレンダー管理システム。自然言語処理を通じてイベントのスケジュール、学習計画の作成、リマインダーの設定をサポート。Google Calendarとの連携、セキュアな認証、インタラクティブなチャットインターフェース、スマートな意図認識機能を搭載。',
    
    'projects.periodicTableAI': '周期表AI',
    'projects.periodicTableAIDescription': 'MXエナジーラボと静岡大学との共同開発によるAI搭載の周期表アプリケーション。RSC APIとのリアルタイムデータ連携、AI駆動のインサイト、化学元素の3Dビジュアライゼーションを特徴とする。',
    
    'projects.pawsitiveId': 'ポジティブID',
    'projects.pawsitiveIdDescription': 'ユーザーがアップロードした写真から犬種を推定するウェブアプリケーション。機械学習を使用して身体的特徴に基づく犬種構成を推定し、遺伝子検査の代替手段を提供。',
    
    'projects.vocalBasedParkinsonsDiseaseDetection': 'パーキンソン病音声検出',
    'projects.vocalBasedParkinsonsDiseaseDetectionDescription': '音声データを使用したパーキンソン病予測のアルゴリズム精度を分析する研究。XGBoostが分類で96%の精度を達成し、優れた性能を実証。',
    
    'projects.piviWatch': 'ピビウォッチ',
    'projects.piviWatchDescription': '高度な動体検知と暗号化技術を通じて映像監視を革新するプロジェクト。動きが検出された映像フレーム内の領域を選択的に暗号化してプライバシーを強化。',

    // Education Section
    'education.degree': '学位',
    'education.university': '大学',
    'education.period': '期間',
    'education.gpa': '成績評価',
    'education.courses': '主な履修科目',
    'education.masters': 'コンピュータサイエンス・セキュリティ理学修士',
    'education.masters.school': 'ボストン大学（マサチューセッツ州）',
    'education.masters.description': 'ソフトウェア開発、セキュリティ分析、およびマネジメントを専攻',
    
    'education.bachelors': 'コンピュータサイエンス・工学学士',
    'education.bachelors.school': 'サティヤバマ科学技術大学（インド）',
    'education.bachelors.description': '機械学習モデルを使用した音声ベースのパーキンソン病検出に関するプロジェクトと論文を完了',

    // Footer
    'footer.quickLinks': 'クイックリンク',
    'footer.letsConnect': 'お問い合わせ',
    'footer.connectText': 'LinkedInで気軽にご連絡ください。協業のご相談やご挨拶をお待ちしております！',
    'footer.copyright': '© {year} Sri Gudibandi. All rights reserved.',

    // Common
    'common.loading': '読み込み中...',
    'common.error': 'コンテンツの読み込みエラー',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language || 'en'
    setLanguage(savedLanguage)
  }, [])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 