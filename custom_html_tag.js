<script>
(function(){
  // Function to set cookie
  function setCookie(cookieName, cookieValue, expirationTimeInDays) {
    var expirationTime = expirationTimeInDays * 24 * 60 * 60 * 1000; // Converts expiration time from days to milliseconds (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    var date = new Date(); 
    date.setTime(date.getTime() + expirationTime); // Sets expiration time (Time now + expiration time)
    var dateString = date.toUTCString(); // Converts milliseconds to UTC time string

    // Get the root domain
    var hostname = location.hostname;
    var domainParts = hostname.split('.').reverse();
    var rootDomain = domainParts[1] + '.' + domainParts[0]; // Assumes at least a two-part domain like 'example.com'

    // Sets cookie for the root domain
    document.cookie = cookieName + "=" + cookieValue + "; SameSite=None; Secure; expires=" + dateString + "; path=/; domain=." + rootDomain;
  }

  // Set your cookies here, the third parameter is now 7 days for all cookies
  setCookie("utm_source_cookie", "{{url - query utm_source}}", 7); // 7 days
  setCookie("utm_campaign_cookie", "{{url - query utm_campaign}}", 7); // 7 days
  setCookie("utm_medium_cookie", "{{url - query utm_medium}}", 7); // 7 days
  setCookie("utm_content_cookie", "{{url - query utm_content}}", 7); // 7 days
  setCookie("utm_term_cookie", "{{url - query utm_term}}", 7); // 7 days
  
  // Add more cookies as needed...
})();
</script>
