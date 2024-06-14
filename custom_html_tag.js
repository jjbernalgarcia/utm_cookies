<script>
(function(){
  // Function to set cookie
  function setCookie(cookieName, cookieValue) {
    // Get the root domain
    var hostname = location.hostname;
    var domainParts = hostname.split('.').reverse();
    var rootDomain = domainParts[1] + '.' + domainParts[0]; // Assumes at least a two-part domain like 'example.com'

    // Sets cookie for the root domain without expiration (session cookie)
    document.cookie = cookieName + "=" + cookieValue + "; SameSite=None; Secure; path=/; domain=." + rootDomain;
  }

  // Function to get URL parameter value
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  // Check for UTM parameters
  var utm_source = getUrlParameter('utm_source');
  var utm_campaign = getUrlParameter('utm_campaign');
  var utm_medium = getUrlParameter('utm_medium');
  var utm_content = getUrlParameter('utm_content');
  var utm_term = getUrlParameter('utm_term');

  // Set cookies if at least one UTM parameter is present
  if (utm_source || utm_campaign || utm_medium || utm_content || utm_term) {
    if (utm_source) setCookie("utm_source", utm_source);
    if (utm_campaign) setCookie("utm_campaign", utm_campaign);
    if (utm_medium) setCookie("utm_medium", utm_medium);
    if (utm_content) setCookie("utm_content", utm_content);
    if (utm_term) setCookie("utm_term", utm_term);
  }
})();
</script>
