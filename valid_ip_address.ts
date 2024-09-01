function validIPAddress(queryIP: string): string {
    // Helper function to validate IPv4 addresses
    const isIPv4 = (): boolean => {
        // Split the input string by '.', IPv4 should have 4 parts
        const octets = queryIP.split('.');
        // Check if there are exactly 4 octets
        if (octets.length !== 4) {
            return false;
        }
        // Validate each octet
        for (const octet of octets) {
            // Convert string to a number
            const num = Number(octet);
            // Check if the octet is within the valid range and is a valid string representation of the number
            // Leading zeros are not allowed in IPv4 octets.
            if (num < 0 || num > 255 || String(num) !== octet || /^0[0-9]/.test(octet)) {
                return false;
            }
        }
        // If all octets are valid, return true
        return true;
    };

    // Helper function to validate IPv6 addresses
    const isIPv6 = (): boolean => {
        // Split the input string by ':', IPv6 should have 8 parts
        const blocks = queryIP.split(':');
        // Check if there are exactly 8 blocks
        if (blocks.length !== 8) {
            return false;
        }
        // Validate each block
        for (const block of blocks) {
            // Check block length is between 1 and 4
            if (block.length === 0 || block.length > 4) {
                return false;
            }
            // Check each character in the block
            for (const char of block) {
                // Check if the character is a valid hexadecimal number
                if (!(/[0-9a-fA-F]/.test(char))) {
                    return false;
                }
            }
        }
        // If all blocks are valid, return true
        return true;
    };

    // Determine the type of IP address
    if (isIPv4()) {
        return 'IPv4';
    } else if (isIPv6()) {
        return 'IPv6';
    } else {
        return 'Neither';
    }
}
