export const BACKEND_BASE_URI = "0.0.0.0";

// export const BACKEND_HOST = process.env.HOST || '0.0.0.0';
// export const BACKEND_PORT = process.env.PORT || 8080;

// export const COMPANIES_TABLE_HEADERS = ["Company Name", "Status", "Created At", "Revenue YTD", "Account Executive"];

export const COMPANY_CHINESE_FIELD_NAME = "chinese_name";
export const COMPANY_ENGLISH_FIELD_NAME = "english_name";
export const ADDRESS_FIELD_NAME = "address";
export const PHONE_NUMBER_FIELD_NAME = "phone_number";

//later on I found out that this only works in the console when ur acutally on the page lol. 
//otherwise you have to use a much shorter path. 
export const chineseNamePath = "body > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > a > table > tbody > tr > td > div.black_12_bold"
export const englishNamePath = "body > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > a > table > tbody > tr > td > div.black_12_normal"
export const addressPath = "body > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr > td > a > table > tbody > tr > td > div.black_9_mini"

export const CHINESE_CHAR_REGEX = /[\u4e00-\u9fa5]/;
