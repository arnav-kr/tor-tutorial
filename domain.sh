# Prints the Domain on which the website can be opened in Tor Browser
function TOR_DOMAIN(){
  domain=$(cat ./tor/hidden_service/hostname)
  echo -e "\033[32mhttp://$domain/\033[0m"
}
TOR_DOMAIN