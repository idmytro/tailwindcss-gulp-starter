# https://gist.github.com/malyw/fade28c8d398a3a86334#file-find-unused-scss-variables

#!/usr/bin/env bash
# HOW TO USE
# Save code to file
# Run as "SCRIPT_FILE_NAME SASS_DIRECTORY"
# e.g "./find_unused_variables.sh ./sass"

find "$1" -type f -name "*.css" -exec grep -o "\-\-[A-Za-z0-9_-]*" {} ';' | sort | uniq -u

# grep -o "\-\-[A-Za-z0-9_-]*" dist/utils.css