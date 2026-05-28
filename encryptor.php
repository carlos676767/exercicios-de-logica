function encryptThis($text)
{
    $words = explode(" ", $text);

    return implode(" ", array_map(function($word) {

        if (strlen($word) === 1) {
            return ord($word);
        }

        if (strlen($word) === 2) {
            return ord($word[0]) . $word[1];
        }

        $first = ord($word[0]);
        $second = $word[1];
        $last = $word[strlen($word) - 1];

        $middle = substr($word, 2, -1);

        return $first . $last . $middle . $second;

    }, $words));
}