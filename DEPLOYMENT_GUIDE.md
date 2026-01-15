# Guide de Déploiement - NonoTalk Landing Page

## 📋 Prérequis

- Compte GitHub
- Compte Vercel
- Compte Resend (gratuit)

---

## 🚀 Étape 1 : Configuration de Resend

### 1.1 Créer un compte Resend
1. Allez sur [https://resend.com](https://resend.com)
2. Créez un compte gratuit
3. Vérifiez votre adresse email

### 1.2 Obtenir votre clé API Resend
1. Dans le dashboard Resend, allez dans **API Keys**
2. Créez une nouvelle clé API
3. Copiez la clé (elle commence par `re_`)

### 1.3 Configurer votre domaine d'envoi (optionnel mais recommandé)
1. Dans Resend, allez dans **Domains**
2. Ajoutez votre domaine (ex: `noreply@nonotalk.fr`)
3. Suivez les instructions de vérification DNS

**Pour le moment**, vous pouvez utiliser le domaine par défaut de Resend (`noreply@resend.dev`).

---

## 📦 Étape 2 : Pousser sur GitHub

### 2.1 Initialiser le dépôt Git
```bash
cd nonotalk-landing
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
git init
git add .
git commit -m "Initial commit: NonoTalk landing page with contact form"
git branch -M main
```

### 2.2 Créer un dépôt sur GitHub
1. Allez sur [https://github.com/new](https://github.com/new)
2. Créez un nouveau dépôt nommé `nonotalk-landing`
3. **Ne pas** initialiser avec README, .gitignore, ou license

### 2.3 Pousser le code
```bash
git remote add origin https://github.com/YOUR_USERNAME/nonotalk-landing.git
git push -u origin main
```

---

## 🌐 Étape 3 : Déployer sur Vercel

### 3.1 Connecter Vercel à GitHub
1. Allez sur [https://vercel.com](https://vercel.com)
2. Cliquez sur **"New Project"**
3. Sélectionnez **"Import Git Repository"**
4. Autorisez Vercel à accéder à votre GitHub
5. Sélectionnez le dépôt `nonotalk-landing`

### 3.2 Configurer les variables d'environnement
1. Dans Vercel, allez dans **Settings** → **Environment Variables**
2. Ajoutez une nouvelle variable :
   - **Name** : `RESEND_API_KEY`
   - **Value** : Votre clé API Resend (ex: `re_xxxxxxxxxxxxx`)
3. Cliquez sur **"Save"**

### 3.3 Déployer
1. Cliquez sur **"Deploy"**
2. Attendez que le build se termine (environ 2-3 minutes)
3. Une fois déployé, vous verrez l'URL de votre site (ex: `https://nonotalk-landing.vercel.app`)

---

## ✅ Étape 4 : Tester le formulaire

### 4.1 Tester en local (optionnel)
```bash
pnpm install
pnpm dev
```
Allez sur `http://localhost:5173` et testez le formulaire.

### 4.2 Tester en production
1. Allez sur votre URL Vercel
2. Cliquez sur le bouton **"Échanger avec nous"**
3. Remplissez le formulaire avec vos informations
4. Cliquez sur **"Envoyer"**
5. Vous devriez recevoir un email à `contact@nonotalk.fr`

---

## 🔧 Dépannage

### Le formulaire ne s'envoie pas
- Vérifiez que `RESEND_API_KEY` est configurée dans Vercel
- Vérifiez les logs Vercel : **Deployments** → **Logs**
- Vérifiez que votre clé API Resend est correcte

### L'email n'arrive pas
- Vérifiez que l'email est envoyé à `contact@nonotalk.fr` (vous pouvez le modifier dans `api/send-contact.ts`)
- Vérifiez votre dossier spam
- Vérifiez que votre domaine d'envoi est configuré dans Resend

### Erreur "Method not allowed"
- Assurez-vous que vous envoyez une requête **POST** (c'est automatique avec le formulaire)

---

## 📝 Configuration personnalisée

### Changer l'email de destination
1. Ouvrez `api/send-contact.ts`
2. Modifiez la ligne :
   ```typescript
   const CONTACT_EMAIL = 'contact@nonotalk.fr';
   ```
3. Remplacez par votre adresse email
4. Poussez les changements sur GitHub
5. Vercel redéploiera automatiquement

### Changer le domaine d'envoi
1. Ouvrez `api/send-contact.ts`
2. Modifiez la ligne :
   ```typescript
   from: 'noreply@nonotalk.fr',
   ```
3. Remplacez par votre domaine configuré dans Resend
4. Poussez les changements sur GitHub

---

## 🎉 C'est fait !

Votre landing page est maintenant en ligne avec un formulaire de contact fonctionnel !

### Prochaines étapes
- Ajouter un domaine personnalisé dans Vercel (Settings → Domains)
- Configurer un domaine d'envoi personnalisé dans Resend
- Ajouter des images/illustrations à votre landing page
- Ajouter des témoignages clients

---

## 📞 Support

Pour toute question :
- Vercel : [https://vercel.com/support](https://vercel.com/support)
- Resend : [https://resend.com/docs](https://resend.com/docs)
