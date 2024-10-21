def analyze_sentence():
    sentence = input("Enter a sentence ending with a point: ")
    
    length_counter = 0
    word_counter = 0
    vowel_counter = 0
    vowels = "aeiouAEIOU"
    
    for character in sentence:
        length_counter += 1
        
        if character in vowels:
            vowel_counter += 1
            
        if character == ' ':
            word_counter += 1

    # Adjust word count for the last word (if there was any text)
    if length_counter > 0:
        word_counter += 1
    
    # Output the results
    print("Length of the sentence:", length_counter)
    print("Number of words in the sentence:", word_counter)
    print("Number of vowels in the sentence:", vowel_counter)

# Call the function
analyze_sentence()
