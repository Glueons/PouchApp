#!/usr/bin/perl

if ($ARGV[0] eq "")
{
    print "\nUsage:   find ARG[0] [ ARG[1] ... ]\n";
    print "Example: find \"KWC cell\"\n";
    exit;
}

$match = $ARGV[0];
if ($ARGV[1] ne "")
{
    $match = $match . " " . $ARGV[1];
}
if ($ARGV[2] ne "")
{
    $match = $match . " " . $ARGV[2];
}
if ($ARGV[3] ne "")
{
    $match = $match . " " . $ARGV[3];
}

	open(OUT,"> find.log");	

#	@loop = "*TableModel.java";
	@loop = "*";

	$count = 0;
	while(<@loop>)
	{
			$first = 0;
		$lineno = 0;
		$name1 = $_;
		open(IN,$name1);
		s/"."/" "/;
		/(\w+)\W+(\w+)/;
		$name2 = $1.".fixed";
		while(<IN>)
		{
				$lineno++;
		    if (/$match/)
		    {
						$line = $_;
						$_ = $name1;		
						if (!/^_.*/)
						{
								if ($first == 0)
								{
										$first = 1;
										$count++;	
										print "$name1\n";	
										print OUT "$name1\n";	
								}
#								print OUT "\t $lineno : ".trim($line);
						}			
		    }
		}
			close(IN);
	}	

	close(OUT);	
	print ("\n",$count," files with a match.\n");

sub trim
{
    my @out = @_;
    s/^\s+//;
    s/\s+$//;
    return wantarray ? @out : $out[0]
}

















