# create the file (safe if it exists)
New-Item -Path README.md -ItemType File -Force | Out-Null

# put some content inside
Set-Content README.md "# Uber Clone`nThis is my Uber clone project."
