1. Install Playwright - npm init playwright@latest
2. Install dotenv and import  - npm install dotenv

Allure
1. Install Allure - npm install -D allure
2. Verion check - npx allure --version
3. Install Allure playwright - npm install -D allure-playwright
4. Verion check - npm list allure-playwright
5. Full test run - npx playwright test
6. Add 'allure-playwright' in config file
7. Generate Allure results - npx allure generate allure-results (show allure results/report folder in this project)
8. Generate allure Report - npx allure open allure-report


rmdir /s /q allure-results
Remove-Item -Recurse -Force allure-report
rmdir /s /q allure-report
npx allure generate allure-results --clean -o allure-report
