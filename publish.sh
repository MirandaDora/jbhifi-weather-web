ng build
aws s3 sync ./dist/jbhifi-weather-web/ s3://jbhifi-weather-web --region ap-southeast-2 --acl public-read --profile miranda-personal-admin
aws cloudfront create-invalidation --distribution-id E33PCTCP0M99DX --paths "/*" --profile miranda-personal-admin