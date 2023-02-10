node {
    stage('checkout'){
        git (branch:'jenkins-blitz', url:'https://github.com/mlblitz/searchable-enterprise-directory.git')
    }
    stage('Install dependencies'){
        bat'''
            set PATH=C:/"Program Files"/nodejs
            cd react-app
            npm install
        '''
    }
    stage('Build'){
        bat'''
            set PATH=C:/"Program Files"/nodejs
            cd react-app
            npm run build
        '''
    }
    stage('Deploy'){
        // bat '''xcopy react-app\\build\\* \\Software\\nginx-1.22.0\\html\\ /s /y'''
        bat '''
            cd react-app
            npm run start
        '''
    }
}