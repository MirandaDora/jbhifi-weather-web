ng build
aws s3 sync ./dist/jbhifi-weather-web/ s3://seek-iam-web --region ap-southeast-2 --acl public-read --profile miranda-personal-admin
aws cloudfront create-invalidation --distribution-id E2T2GWBWJCLB65 --paths "/*" --profile miranda-personal-admin